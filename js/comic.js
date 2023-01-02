AFRAME.registerComponent("info-banner", {
    schema: {
      itemId: { default: "", type: "string" },
    },
    update: function () {
      this.createBanner();
    },
    createBanner: function () {
      postersInfo = {
        "comic-1": {
          title: "Avengers",
          description:
            "Superman is an ongoing American The Avengers began as a group of extraordinary individuals who were assembled to defeat Loki and his Chitauri army in New York City. Since then, the team has expanded its roster and faced a host of new threats, while dealing with their own turmoil.",
        },
        "comic-2": {     
             title: "Wolverine",
          description:
            "Logan travels to Tokyo to meet Yashida, an old acquaintance who is dying. The situation regresses when Yashida offers to take away his healing abilities, but Logan refuses.",
        },
        "comic-4": {          
            title: "Mutants",
          description:
            "Five teenage mutants  undergo treatments at a secret institution that will cure them of their dangerous powers. Invited by Dr. Cecilia Reyes to share their stories, their memories soon turn into terrifying realities as they start to question why they're being held and who's trying to destroy them.",
        },
        "comic-3": {    
            title: "Mad Max",
          description:
            "In a post-apocalyptic wasteland, Max, a drifter and survivor, unwillingly joins Imperator Furiosa, a rebel warrior, in a quest to overthrow a tyrant who controls the land's water supply.",
        },
      };
      const { itemId } = this.data;
  
      const fadeBackgroundEl = document.querySelector("#fadeBackground");
  
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("id", `${itemId}-banner`);
  
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 0.9,
        height: 0.9,
        
      });
  
      entityEl.setAttribute("material", { color: "#9cadce" });
      entityEl.setAttribute("position", { x: 0, y: 0, z: -1 });
  
      const item = postersInfo[itemId];
  

      const titleEl = this.createTitleEl(item);
      const descriptionEl = this.createDescriptionEl(item);
  
     
      entityEl.appendChild(titleEl);
      entityEl.appendChild(descriptionEl);
  
      fadeBackgroundEl.appendChild(entityEl);
    },
    createTitleEl: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("text", {
        shader: "msdf",
        anchor: "left",
        font: "dejavu",
        width: 1.2,
        height: 2,
        color: "black",
        value: `${item.title} `,
      });
      entityEl.setAttribute("position", { x: -0.4, y: 0.02, z: 0.05 });
      return entityEl;
    },
    createDescriptionEl: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("text", {
        shader: "",
        anchor: "left",
        font: "dejavu",
        width: 0.75,
        height: 2,
        color: "black",
        wrapCount: "40",
        value: item.description,
      });
      entityEl.setAttribute("position", { x: -0.4, y: -0.24, z: 0.05 });
      return entityEl;
    },
  });