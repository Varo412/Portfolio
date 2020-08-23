navbarP = {
  headerHeight: document.querySelector("header").offsetHeight,
  toggle: document.getElementById("burgerButton"),
  toggleVal: false,
  links: document.querySelectorAll("#logo, .nav-link"),
  highlight: document.querySelector("#highlight"),
  linksBox: document.querySelector("#linksBox"),
  linksli: document.querySelectorAll("#linksBox li"),
  highlightStatus: 1,
  toggleView: true
};

navbarM = {
  toggleAction: function () {
    navbarP.toggleVal = !navbarP.toggleVal;
  },

  resizeHighlight: function (link) {
    if (!navbarP.toggleView) {
      navbarP.highlight.style.marginLeft = link.offsetLeft - navbarP.linksBox.offsetLeft + "px";
      navbarP.highlight.style.width = link.offsetWidth + "px";
    }
  }
};

navbarP.toggle.addEventListener("click", navbarM.toggleAction);

navbarP.links.forEach((link) => {
  link.addEventListener("click", function () {
    navbarP.clicked = true;
    if (navbarP.toggleVal) navbarP.toggle.click();
  });
});



navbarP.linksli.forEach((link) => {
  link.addEventListener("mouseover", function () {
    navbarM.resizeHighlight(link);
  })

  link.addEventListener("mouseout", function () {
    navbarP.linksli.forEach((link) => {
      if (navbarP.highlightStatus == link.id.substring(3)) {
        navbarM.resizeHighlight(link)
      }
    });
  });
});


