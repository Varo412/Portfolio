navbarP = {
  toggle: document.getElementById("burgerButton"),
  toggleVal: false,
  links: document.querySelectorAll("#logo, .nav-link"),
};

navbarM = {
  toggleAction: function () {
    navbarP.toggleVal = !navbarP.toggleVal;
    console.log(navbarP.toggleVal);
  },
};

navbarP.toggle.addEventListener("click", navbarM.toggleAction);

navbarP.links.forEach((link) => {
  link.addEventListener("click", function () {
    if (navbarP.toggleVal) navbarP.toggle.click();
  });
});
