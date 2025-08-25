class TextTile extends HTMLElement {
    static get observedAttributes() {
      return [
        "title", 
        "description", 
        "link", 
        "linktext", 
        "dates", 
        "deadline",  
        "materials", 
        "materialstext",
        "video",
        "videotext"
        ];
    }
  
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: "open" });
      shadow.innerHTML = /* html */`
      <style>
        :host {
        display: block;
        box-sizing: border-box;
        border: 1px solid transparent; /* default border */
        border-radius: 10px;
        box-shadow: 5px 5px 10px #d4d4d4, -5px -5px 10px #ffffff;
        cursor: default;
        min-height: 300px;
        max-width: calc(50% - 1rem);
        flex: 1 1 calc(50% - 1rem);
        }

        :host(:hover) {
        border-color: #3273dc; /* blue border on hover */
        box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
                    0 0 0 1px #3273dc;
        }

        .tile {
          border-radius: 20px;
          background: #fff;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
        }

        h3 {
          margin: 0 0 0.5rem 0;
          font-size: 1rem;
          font-weight: 0;
          line-height: 1.3;
        }
  
        p {
          margin: 0 0 0.75rem 0;
          font-size: 0.75rem;
          line-height: 1.5;
        }
  
        .content {
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          transition: all 0.3s ease;
        }
  
        .content.expanded {
          -webkit-line-clamp: unset;
          overflow: visible;
        }
  
        .dates, .deadline {
          font-weight: 0;
          margin-bottom: 0.5rem;
        }
  
        .links a {
          display: inline-block;
          color: #3273dc;
          text-decoration: underline;
          font-size: 0.75rem;
          cursor: pointer;
        }

        .links .divider {
           margin: 0 0.5rem;
           color: #666;
        }
  
        .toggle-button {
            background: none;
            border: none;
            color: #3273dc;
            font-size: 0.6rem;
            cursor: pointer;
            padding: 0;
            margin-bottom: 0.5rem; /* optional: to separate from dates/deadline below */
            text-decoration: underline;
            align-self: flex-start;
        }
      </style>
  
    <div class="tile">
        <h3 part="title"></h3>
        <p class="dates" part="dates"></p>
        <p class="deadline" part="deadline"></p>
        <p class="content" part="description"></p>
        <button class="toggle-button" hidden>Show more</button>
        <p class="links">
          <a class="more-info" part="linktext" target="_blank" rel="noopener noreferrer"></a>
          <span class="divider" hidden>|</span>
          <a class="materials-link" part="materialstext" target="_blank" rel="noopener noreferrer" hidden></a>
          <span class="divider" hidden>|</span>
          <a class="video-link" part=videotext "target="_blank" rel="noopener noreferrer" hidden> </a>
        </p>
      </div>
      `;
  
      // Cache elements

      this.$title = shadow.querySelector("h3");
      this.$dates = shadow.querySelector(".dates");
      this.$deadline = shadow.querySelector(".deadline");
      this.$desc = shadow.querySelector(".content");
      this.$toggleBtn = shadow.querySelector(".toggle-button");
      this.$moreInfo = shadow.querySelector(".more-info");
      this.$materials = shadow.querySelector(".materials-link");
      this.$divider = shadow.querySelector(".divider");
      //this.$videoLink = shadow.querySelector(".video-link")
    }
  
    connectedCallback() {
      this.#render();
      this.#setupToggle();
    }
  
    attributeChangedCallback() {
      this.#render();
    }
  
    get title() { return this.getAttribute("title") || ""; }
    set title(val) { this.setAttribute("title", val); }
    
    get dates() { return this.getAttribute("dates") || ""; }
    set dates(val) { this.setAttribute("dates", val); }
  
    get description() { return this.getAttribute("description") || ""; }
    set description(val) { this.setAttribute("description", val); }
  
    get link() { return this.getAttribute("link") || ""; }
    set link(val) { this.setAttribute("link", val); }
  
    get linktext() { return this.getAttribute("linktext") || "Course page"; }
    set linktext(val) { this.setAttribute("linktext", val); }
  
    get deadline() { return this.getAttribute("deadline") || ""; }
    set deadline(val) { this.setAttribute("deadline", val); }

    get materials() { return this.getAttribute("materials") || ""; }
    set materials(val) { this.setAttribute("materials", val); }

    get materialstext() {return this.getAttribute("materialstext") || "Materials";}
    set materialstext(val) { this.setAttribute("materialstext", val);}
    
    // get videotext() {return this.getAttribute("videotext") || "Video";}
    // set videotext(val) { this.setAttribute("videotext", val);}

  
  
    #render() {
      this.$title.textContent = this.title;
      this.$desc.innerHTML = (this.description || "").replace(/\n/g, "<br>");
  
      this.$dates.textContent = this.dates;
      this.$dates.style.display = this.dates ? "block" : "none";
  
      this.$deadline.textContent = this.deadline;
      this.$deadline.style.display = this.deadline ? "block" : "none";
  
      if (this.link){
        this.$moreInfo.href = this.link;
        this.$moreInfo.textContent = this.linktext;
        this.$moreInfo.hidden = false;
      } else {
        this.$moreInfo.hidden = true;
      }
  
      // links — Materials
      if (this.materials){
        this.$materials.href = this.materials;
        this.$materials.textContent = this.materialstext;
        this.$materials.hidden = false;
      } else {
        this.$materials.hidden = true;
      }
  
      // divider visibility
      this.$divider.hidden = this.$moreInfo.hidden || this.$materials.hidden  //|| this.$videoLink.hidden;
    }
  
    #setupToggle() {
      const updateToggleVisibility = () => {
          const desc = this.$desc;
        
          // Temporarily un-expand the element to measure its clamped state.
          desc.classList.remove("expanded");
      
          // Use requestAnimationFrame to ensure the browser has rendered the change.
          requestAnimationFrame(() => {
              const computedStyle = getComputedStyle(desc);
              const lineHeight = parseFloat(computedStyle.lineHeight);
      
              // If lineHeight isn't available (e.g., element is hidden), do nothing.
              if (isNaN(lineHeight)) {
                  return;
              }
              
              const clampLines = 3; // The number of lines to show initially.
              const maxClampedHeight = lineHeight * clampLines;
  
              // First, check if the text overflows the initial 3 lines at all.
              const isOverflowing = desc.scrollHeight > maxClampedHeight;
      
              if (isOverflowing) {

                  const overflowThreshold = lineHeight * (clampLines + 2); // 3 + 2 = 5 lines total
  
                  if (desc.scrollHeight > overflowThreshold) {
                      this.$toggleBtn.hidden = false;
                  } else {
                      // The hidden text is 2 lines or less. Expand it automatically and hide the button.
                      desc.classList.add("expanded");
                      this.$toggleBtn.hidden = true;
                  }
              } else {
                  // The text fits within 3 lines, so no button is needed.
                  this.$toggleBtn.hidden = true;
              }
          });
      };
      
      this.$toggleBtn.addEventListener("click", () => {
          const expanded = this.$desc.classList.toggle("expanded");
          this.$toggleBtn.textContent = expanded ? "Show less" : "Show more";
      });

      if ('ResiwillzeObserver' in window) {
          const observer = new ResizeObserver(updateToggleVisibility);
          observer.observe(this.$desc);
      } else {
          updateToggleVisibility();
      }
  }

  }

  // Register once
  if (!customElements.get("text-tile")) {
    customElements.define("text-tile", TextTile);
  }
  