## Course Tile Documentation
This guide explains how to add and format course tiles for the index.md page. If some parts are not visible, please look at the markdown in GitHub.

### How to Add Course Tiles
To create a course tile, you need to use a div element with the class tile-grid. This acts as a container (one row) for your course tiles. Each tile-grid can hold a maximum of two <text-tile> elements.
    
1. **Create a container**  
   Start by adding:  
   ```html
   <div class="tile-grid">
    ```
       
2. Add your course tiles (up to 2 text-tiles, can be just 1): 
    ```html
   <div class="tile-grid">
       <text-tile Course no 1 info here (using attributes)></text-tile>
       <text-tile Course no 2 info here (using attributes)></text-tile>
3. Close the container: Finish by adding /div
    ```html
   <div class="tile-grid">
       <text-tile Course no 1 info here (using attributes)></text-tile>
       <text-tile Course no 2 info here (using attributes)></text-tile>
    </div>
### Text-Tile Attributes
Each <text-tile> has several attributes you can use to add information about the course.


| Attribute | Description | Example |
| -------- | -------- | -------- |
| title     | The title of the course or webinar.     | title="WEBINAR SERIES: AI in the life sciences"     |
|description| A short description of the course. | description="This course is intended for..." |
|link | The URL for the course registration or information page. Shown as "Course page" on the site by default.| link="https://www.biocommons.org.au/events/ai-series-2025" |
|linktext | The name of the link shown to the user. By default this is "Course page".| linktext="More info" |
|dates | The date(s) of the course. | dates="Dates: 11 June, 2 July, 29 July, 26 August, 2 September" |
| deadline | A user-friendly display of the registration deadline. | deadline="Registration deadline: 24 hours before the webinar" |
| materials | (Optional) A link to the course materials. Shown as "Materials" on the site by default.| materials="https://sib-swiss.github.io/single-cell-r-training/" |
|materialstext | The name of the materials link shown to the user. By default this is "Materials".| materialstext="See videos" |
| data-deadline-date | Crucial for auto-removal. Used for courses/webinars. The registration deadline in YYYY-MM-DD format. The site user will not see this. | data-deadline-date="2025-06-25" |
| data-added-date | Used for materials with a 6 month deadline. The added date indicates the date when the material was added. This should be in YYYY-MM-DD format. The site user will not see this.| data-added-date="2025-09-02" |

❗️ Important: The data-deadline-date and data-added-date attributes are critical for the automatic removal of expired courses. Ensure they are in the correct format.

### Automatic Tile Removal
Tiles are automatically hidden from the live webpage after the date specified in data-deadline-date or data-webinar-date has passed.

However, the <text-tile> blocks are not automatically removed from the index.md file. This must be done manually (as of 25.08.2025).

To help with cleanup, you can get a list of outdated course titles by adding ?13082025=true to the URL (e.g., https://elixir.ut.ee/?13082025=true). This will download a text file containing the titles of the courses that need to be removed from the index.md file.

### In case of any questions, please turn to Marilin.