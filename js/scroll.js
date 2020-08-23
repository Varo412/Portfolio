scrollP = {
  position: 0,
}


$("#logo, .nav-link").click(function (e) {
  e.preventDefault();
  var target = $(this).attr("href");

  if (target == "#home" || target == "/") {
    scrollP.position = 0;
    $("html,body").animate(
      { scrollTop: 0 },
      1000,
      "easeInOutExpo"
    );
    navbarP.highlightStatus = 1;
    navbarM.resizeHighlight(navbarP.linksli[0]);
  }

  else if (window.matchMedia("(max-width: 766px)").matches) {
    $("html,body").animate(
      { scrollTop: $(target).offset().top - 138 },
      1000,
      "easeInOutExpo"
    );
  }
  else {
    $("html,body").animate(
      { scrollTop: $(target).offset().top - document.querySelector("header").offsetHeight },
      1000,
      "easeInOutExpo",
    );
    //situamos el highlight a donde hayamos clickado
    navbarP.linksli.forEach(link => {
      if (link.childNodes[1].getAttribute("href") == target) {
        navbarP.highlightStatus = link.id.substring(3);
        navbarM.resizeHighlight(link);
      }
    });
  }
});

