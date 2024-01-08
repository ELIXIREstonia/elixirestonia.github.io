var app = function() {
    "use strict";
    function t() {}
    function e(t) {
        return t()
    }
    function n() {
        return Object.create(null)
    }
    function o(t) {
        t.forEach(e)
    }
    function r(t) {
        return "function" == typeof t
    }
    function i(t, e) {
        return t != t ? e == e : t !== e || t && "object" == typeof t || "function" == typeof t
    }
    function s(t, e) {
        t.appendChild(e)
    }
    function a(t, e, n) {
        t.insertBefore(e, n || null)
    }
    function c(t) {
        t.parentNode.removeChild(t)
    }
    function l(t) {
        return document.createElement(t)
    }
    function d(t) {
        return document.createElementNS("http://www.w3.org/2000/svg", t)
    }
    function f(t) {
        return document.createTextNode(t)
    }
    function h() {
        return f(" ")
    }
    function u(t, e, n) {
        null == n ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n)
    }
    function g(t, e) {
        e = "" + e,
        t.wholeText !== e && (t.data = e)
    }
    let p;
    function m(t) {
        p = t
    }
    const b = [],
        x = [],
        $ = [],
        w = [],
        y = Promise.resolve();
    let k = !1;
    function v(t) {
        $.push(t)
    }
    let _ = !1;
    const C = new Set;
    function E() {
        if (!_) {
            _ = !0;
            do {
                for (let t = 0; t < b.length; t += 1) {
                    const e = b[t];
                    m(e),
                        M(e.$$)
                }
                for (m(null), b.length = 0; x.length;)
                    x.pop()();
                for (let t = 0; t < $.length; t += 1) {
                    const e = $[t];
                    C.has(e) || (C.add(e), e())
                }
                $.length = 0
            } while (b.length);
            for (; w.length;)
                w.pop()();
            k = !1,
                _ = !1,
                C.clear()
        }
    }
    function M(t) {
        if (null !== t.fragment) {
            t.update(),
                o(t.before_update);
            const e = t.dirty;
            t.dirty = [-1],
            t.fragment && t.fragment.p(t.ctx, e),
                t.after_update.forEach(v)
        }
    }
    const z = new Set;
    function A(t, e) {
        -1 === t.$$.dirty[0] && (b.push(t), k || (k = !0, y.then(E)), t.$$.dirty.fill(0)),
            t.$$.dirty[e / 31 | 0] |= 1 << e % 31
    }
    function H(i, s, a, l, d, f, h=[-1]) {
        const u = p;
        m(i);
        const g = s.props || {},
            b = i.$$ = {
                fragment: null,
                ctx: null,
                props: f,
                update: t,
                not_equal: d,
                bound: n(),
                on_mount: [],
                on_destroy: [],
                before_update: [],
                after_update: [],
                context: new Map(u ? u.$$.context : []),
                callbacks: n(),
                dirty: h,
                skip_bound: !1
            };
        let x = !1;
        if (b.ctx = a ? a(i, g, (t, e, ...n) => {
            const o = n.length ? n[0] : e;
            return b.ctx && d(b.ctx[t], b.ctx[t] = o) && (!b.skip_bound && b.bound[t] && b.bound[t](o), x && A(i, t)), e
        }) : [], b.update(), x = !0, o(b.before_update), b.fragment = !!l && l(b.ctx), s.target) {
            if (s.hydrate) {
                const t = function(t) {
                    return Array.from(t.childNodes)
                }(s.target);
                b.fragment && b.fragment.l(t),
                    t.forEach(c)
            } else
                b.fragment && b.fragment.c();
            s.intro && (($ = i.$$.fragment) && $.i && (z.delete($), $.i(w))),
                function(t, n, i) {
                    const {fragment: s, on_mount: a, on_destroy: c, after_update: l} = t.$$;
                    s && s.m(n, i),
                        v(() => {
                            const n = a.map(e).filter(r);
                            c ? c.push(...n) : o(n),
                                t.$$.on_mount = []
                        }),
                        l.forEach(v)
                }(i, s.target, s.anchor),
                E()
        }
        var $,
            w;
        m(u)
    }
    let j;
    function T(t, e, n) {
        const o = t.slice();
        return o[7] = e[n], o[9] = n, o
    }
    function L(t) {
        let e,
            n = t[5],
            o = [];
        for (let e = 0; e < n.length; e += 1)
            o[e] = N(T(t, n, e));
        return {
            c() {
                e = l("div");
                for (let t = 0; t < o.length; t += 1)
                    o[t].c();
                u(e, "class", "tags")
            },
            m(t, n) {
                a(t, e, n);
                for (let t = 0; t < o.length; t += 1)
                    o[t].m(e, null)
            },
            p(t, r) {
                if (32 & r) {
                    let i;
                    for (n = t[5], i = 0; i < n.length; i += 1) {
                        const s = T(t, n, i);
                        o[i] ? o[i].p(s, r) : (o[i] = N(s), o[i].c(), o[i].m(e, null))
                    }
                    for (; i < o.length; i += 1)
                        o[i].d(1);
                    o.length = n.length
                }
            },
            d(t) {
                t && c(e),
                    function(t, e) {
                        for (let n = 0; n < t.length; n += 1)
                            t[n] && t[n].d(e)
                    }(o, t)
            }
        }
    }
    function N(t) {
        let e,
            n,
            o,
            r = t[7] + "";
        return {
            c() {
                e = l("span"),
                    n = f(r),
                    o = h(),
                    u(e, "class", "tag is-info is-light")
            },
            m(t, r) {
                a(t, e, r),
                    s(e, n),
                    s(e, o)
            },
            p(t, e) {
                32 & e && r !== (r = t[7] + "") && g(n, r)
            },
            d(t) {
                t && c(e)
            }
        }
    }
    function O(e) {
        let n,
            o,
            r,
            i,
            p,
            m,
            b,
            x,
            $,
            w,
            y,
            k,
            v,
            _,
            C,
            E,
            M,
            z = e[5].length > 0 && L(e);
        return {
            c() {
                n = l("div"),
                    o = l("a"),
                    r = l("div"),
                    i = l("img"),
                    m = h(),
                    b = l("div"),
                    x = l("p"),
                    $ = l("strong"),
                    w = f(e[2]),
                    y = f(" — "),
                    k = f(e[3]),
                    v = h(),
                    _ = l("a"),
                    C = d("svg"),
                    E = d("path"),
                    M = h(),
                z && z.c(),
                    this.c = t,
                i.src !== (p = e[0]) && u(i, "src", p),
                    u(i, "alt", "A screenshot of a tool"),
                    u(r, "class", "img"),
                    u(E, "fill", "currentColor"),
                    u(E, "d", "M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48z"),
                    u(C, "aria-hidden", "true"),
                    u(C, "width", "12"),
                    u(C, "height", "12"),
                    u(C, "focusable", "false"),
                    u(C, "data-prefix", "far"),
                    u(C, "data-icon", "file"),
                    u(C, "class", "svg-inline--fa fa-file fa-w-12"),
                    u(C, "role", "img"),
                    u(C, "xmlns", "http://www.w3.org/2000/svg"),
                    u(C, "viewBox", "0 0 384 512"),
                    u(_, "class", "doi"),
                    u(_, "href", e[4]),
                    u(_, "title", "DOI"),
                    u(b, "class", "title"),
                    u(o, "href", e[1]),
                    u(o, "class", "box soft"),
                    u(n, "class", "tile is-parent")
            },
            m(t, e) {
                a(t, n, e),
                    s(n, o),
                    s(o, r),
                    s(r, i),
                    s(o, m),
                    s(o, b),
                    s(b, x),
                    s(x, $),
                    s($, w),
                    s(x, y),
                    s(x, k),
                    s(x, v),
                    s(x, _),
                    s(_, C),
                    s(C, E),
                    s(o, M),
                z && z.m(o, null)
            },
            p(t, [e]) {
                1 & e && i.src !== (p = t[0]) && u(i, "src", p),
                4 & e && g(w, t[2]),
                8 & e && g(k, t[3]),
                16 & e && u(_, "href", t[4]),
                    t[5].length > 0 ? z ? z.p(t, e) : (z = L(t), z.c(), z.m(o, null)) : z && (z.d(1), z = null),
                2 & e && u(o, "href", t[1])
            },
            i: t,
            o: t,
            d(t) {
                t && c(n),
                z && z.d()
            }
        }
    }
    function S(t, e, n) {
        let o,
            {tags: r=""} = e,
            {src: i=""} = e,
            {href: s=""} = e,
            {name: a=""} = e,
            {description: c=""} = e,
            {doi: l=""} = e;
        return t.$$set = t => {
            "tags" in t && n(6, r = t.tags),
            "src" in t && n(0, i = t.src),
            "href" in t && n(1, s = t.href),
            "name" in t && n(2, a = t.name),
            "description" in t && n(3, c = t.description),
            "doi" in t && n(4, l = t.doi)
        }, t.$$.update = () => {
            64 & t.$$.dirty && n(5, o = r.split(",").map(t => t.trim()).filter(t => t.length > 0))
        }, [i, s, a, c, l, o, r]
    }
    "function" == typeof HTMLElement && (j = class  extends HTMLElement{
            constructor()
            {
                super(),
                    this.attachShadow({
                        mode: "open"
                    })
            }
            connectedCallback()
            {
                for (const t in this.$$.slotted)
                    this.appendChild(this.$$.slotted[t])
            }
            attributeChangedCallback(t, e, n)
            {
                this[t] = n
            }
            $destroy()
            {
                !function(t, e) {
                    const n = t.$$;
                    null !== n.fragment && (o(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = [])
                }(this, 1),
                    this.$destroy = t
            }
            $on(t, e)
            {
                const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
                return n.push(e), () => {
                    const t = n.indexOf(e);
                    -1 !== t && n.splice(t, 1)
                }
            }
            $set(t)
            {
                var e;
                this.$$set && (e = t, 0 !== Object.keys(e).length) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1)
            }
        }
    );
    return customElements.define("tool-tile", class  extends j{
            constructor(t)
            {
                super(),
                    this.shadowRoot.innerHTML = "<style>.soft{cursor:pointer;border-radius:20px;background:#ffffff;box-shadow:5px 5px 10px #d4d4d4, -5px -5px 10px #ffffff;transition:all 200ms;text-decoration:none}.tile{flex:1;height:100%;box-sizing:border-box}.soft .img img{width:100%;height:auto}.soft .title{flex-grow:1}.tags{margin-bottom:auto}.doi{color:#555;border-bottom:1px solid #bbb;border-right:1px solid #aaa;background-color:#eee;border-radius:50px;width:18px;height:18px;line-height:18px;display:inline-block;text-align:center;padding-left:2px}.doi:hover{color:cornflowerblue;background-color:#d5eaff;border-bottom:1px solid #6f9de3;border-right:1px solid #86a9de;transition:all 200ms}.box{background-color:white;border-radius:6px;box-shadow:0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);color:#4a4a4a;padding:1.25rem;display:flex;flex-direction:column}a.box:hover,a.box:focus{box-shadow:0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0 0 1px #3273dc}a.box:active{box-shadow:inset 0 1px 2px rgba(10, 10, 10, 0.2), 0 0 0 1px #3273dc}.tile{align-items:stretch;display:block;flex-basis:0;flex-grow:1;flex-shrink:1;min-height:-webkit-min-content;min-height:-moz-min-content;min-height:min-content}.tile.is-parent{padding:0.75rem}@media screen and (min-width: 769px), print{.tile:not(.is-child){display:flex}}.tags{align-items:center;display:flex;flex-wrap:wrap;justify-content:flex-start}.tags .tag{margin-bottom:0.5rem}.tags .tag:not(:last-child){margin-right:0.5rem}.tags:last-child{margin-bottom:-0.5rem}.tags:not(:last-child){margin-bottom:1rem}.tag:not(body){align-items:center;background-color:whitesmoke;border-radius:4px;color:#4a4a4a;display:inline-flex;font-size:0.75rem;height:2em;justify-content:center;line-height:1.5;padding-left:0.75em;padding-right:0.75em;white-space:nowrap}.tag:not(body).is-light{background-color:whitesmoke;color:rgba(0, 0, 0, 0.7)}.tag:not(body).is-info{background-color:#3298dc;color:#fff}.tag:not(body).is-info.is-light{background-color:#eef6fc;color:#1d72aa}</style>",
                    H(this, {
                        target: this.shadowRoot
                    }, S, O, i, {
                        tags: 6,
                        src: 0,
                        href: 1,
                        name: 2,
                        description: 3,
                        doi: 4
                    }),
                t && (t.target && a(t.target, this, t.anchor), t.props && (this.$set(t.props), E()))
            }
            static get observedAttributes()
            {
                return ["tags", "src", "href", "name", "description", "doi"]
            }
            get tags()
            {
                return this.$$.ctx[6]
            }
            set tags(t)
            {
                this.$set({
                    tags: t
                }),
                    E()
            }
            get src()
            {
                return this.$$.ctx[0]
            }
            set src(t)
            {
                this.$set({
                    src: t
                }),
                    E()
            }
            get href()
            {
                return this.$$.ctx[1]
            }
            set href(t)
            {
                this.$set({
                    href: t
                }),
                    E()
            }
            get name()
            {
                return this.$$.ctx[2]
            }
            set name(t)
            {
                this.$set({
                    name: t
                }),
                    E()
            }
            get description()
            {
                return this.$$.ctx[3]
            }
            set description(t)
            {
                this.$set({
                    description: t
                }),
                    E()
            }
            get doi()
            {
                return this.$$.ctx[4]
            }
            set doi(t)
            {
                this.$set({
                    doi: t
                }),
                    E()
            }
        }
    ), app
}();
