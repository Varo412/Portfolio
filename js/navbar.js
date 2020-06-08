navbarP = {
  header: document.getElementById("header"),
  sticky: header.offsetTop,
};

navbarM = {
  stickBar: function () {
    if (window.pageYOffset > navbarP.sticky) {
      navbarP.header.classList.add("sticky");
    } else {
      navbarP.header.classList.remove("sticky");
    }
  },
};

window.onscroll = function () {
  navbarM.stickBar();
};
