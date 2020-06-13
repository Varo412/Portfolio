navbarP = {
  header: document.querySelector("header"),
  sticky: document.querySelector("header").offsetTop,
  toggleButton: document.getElementById("burgerButton"),
  toggleVal: false,
};

navbarM = {
  stickBar: function () {
    let content = document.querySelector(".content");
    if (window.pageYOffset > navbarP.sticky) {
      navbarP.header.classList.add("sticky");
      if (window.matchMedia("(min-width: 769px)").matches)
        content.style.paddingTop = "98px";
      else if (window.matchMedia("(max-width: 768px)").matches) {
        if (navbarP.toggleVal) content.style.paddingTop = "290px";
        else content.style.paddingTop = "98px";
      }
    } else {
      navbarP.header.classList.remove("sticky");
      content.style.paddingTop = "16px";
    }
  },

  toggleFun: function () {
    navbarP.toggleVal = !navbarP.toggleVal;
    console.log("toggle", navbarP.toggleVal);
  },
};

navbarP.toggleButton.onclick = function () {
  navbarM.toggleFun();
};

window.onscroll = function () {
  navbarM.stickBar();
};
