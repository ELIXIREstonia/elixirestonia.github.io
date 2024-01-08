"""
Customised pybtex classes for generating our Markdown page from
publications.yaml. The main file that uses these classes is publications.py.

MarkdownBackend:
– adds the content of "prologue.md" to the output file
- support of rendering year numbers as headings
- custom item rendering ("1. " instead of "[1] ")
- reduces the list of special characters to reduce useless escaping

CustomStyle:
- based on 'unsrt' style
- adds mock-entries for representing years
- renders 'title' bold and potentially as a link (from 'url')
- renders 'title' cursive when there is an 'elixir' property
- renders DOI links with customised text ("Available from: ")
- skips 'url' in the list of links, as it is used for the title

YearMonthSortingStyle:
- sorts articles by year (descending order) and month (ascending order)
- note that 'month' is based on 3-letter month name (to determine order)
  non-recognized months are sorted as last
"""

import calendar

from pybtex.backends.markdown import Backend
from pybtex.richtext import Text
from pybtex.style import FormattedEntry
from pybtex.style.formatting.unsrt import Style
from pybtex.style.sorting import BaseSortingStyle
from pybtex.style.template import field, href, join, sentence, tag
from xml.sax.saxutils import escape


SPECIAL_CHARS = [
    u'\\',  # backslash
    u'`',   # backtick
    u'*',   # asterisk
    u'_',   # underscore
    u'{',   # curly braces
    u'}',   # curly braces
    u'[',   # square brackets
    u']',   # square brackets
    u'(',   # parentheses
    u')',   # parentheses
    u'#',   # hash mark
    u'+',   # plus sign
    u'!',   # exclamation mark
]


class MarkdownBackend(Backend):

    def write_entry(self, key, label, text):
        if key == label:  # The title of a year-section
            self.output(u'\n### %s\n\n' % label)
        else:  # A list item (label is a number)
            self.output(u'%2s. ' % label)
            self.output(u'%s\n' % text)

    def write_prologue(self):
        with open("prologue.md", "r") as prologue:
            self.output(prologue.read())

    def format_str(self, text):
        """Format the given string *str_*.
        Escapes special markdown control characters.
        """
        text = escape(text)
        for special_char in SPECIAL_CHARS:
            text = text.replace(special_char, u'\\' + special_char)
        return text


class CustomStyle(Style):

    def format_entries(self, entries, bib_data=None):
        sorted_entries = self.sort(entries)
        labels = self.format_labels(sorted_entries)
        years = set()
        earlier_category = False
        counter = 0

        for label, entry in zip(labels, sorted_entries):
            counter += 1
            year = entry.fields["year"]

            if year not in years:
                years.add(year)

                if int(year) >= 2015:
                    counter = 1
                    yield FormattedEntry(year, Text(), year)
                elif not earlier_category:
                    counter = 1
                    earlier_category = True
                    yield FormattedEntry("Earlier", Text(), "Earlier")

            yield self.format_entry(str(counter), entry, bib_data=bib_data)

    def format_title(self, e, which_field, as_sentence=True):
        formatted_title = field(
            which_field, apply_func=lambda text: text.add_period()
        )

        if 'url' in e.fields:
            formatted_title = href [ e.fields['url'], formatted_title ]
        if 'elixir' in e.fields:
            formatted_title = tag('em') [ formatted_title ]
        return tag('strong') [ formatted_title ]

    def format_web_refs(self, e):
        return self.format_doi(e)

    def format_doi(self, e):
        url = join [ 'https://doi.org/', field('doi', raw=True) ]
        return join [ 'Available from: ', href [ url, url ] ]


class YearMonthSortingStyle(BaseSortingStyle):

    months = []
    def sorting_key(self, entry):
        year_num = int(entry.fields.get('year', '-'))
        month_name = entry.fields.get('month', '').lower()

        month_num = 100
        for i in range(len(calendar.month_abbr)):
            if calendar.month_abbr[i].lower() == month_name:
                month_num = i
                break

        return (-year_num, month_num)
