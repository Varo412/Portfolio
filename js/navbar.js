navbarP = {
  headerHeight: document.querySelector("header").offsetHeight,
  toggle: document.getElementById("burgerButton"),
  toggleVal: false,
  links: document.querySelectorAll("#logo, .nav-link"),
  highlight: document.querySelector("#highlight"),
  linksBox: document.querySelector("#linksBox"),
  linksli: document.querySelectorAll("#linksBox li"),
  highlightStatus: 1
};

navbarM = {
  toggleAction: function () {
    navbarP.toggleVal = !navbarP.toggleVal;
  },
};

navbarP.toggle.addEventListener("click", navbarM.toggleAction);

navbarP.links.forEach((link) => {
  link.addEventListener("click", function () {
    if (navbarP.toggleVal) navbarP.toggle.click();
  });
});

navbarP.linksli.forEach((link) => {
  link.addEventListener("mouseover", function (event) {
    navbarP.highlightStatus = link.id.substring(3); 
    navbarP.highlight.style.marginLeft = link.offsetLeft - navbarP.linksBox.offsetLeft + "px";
    navbarP.highlight.style.width = link.offsetWidth + "px";
  });

  link.addEventListener("mouseout", function (event) {
    navbarP.highlightStatus = 1;
    navbarP.highlight.style.marginLeft = 0;
    navbarP.highlight.style.width = document.querySelector("#linksBox li").offsetWidth + "px";
  });
})

