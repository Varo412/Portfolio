$("#logo, .nav-link").click(function (e) {
  e.preventDefault();
  console.log(e.target);
  var target = $(this).attr("href");

  if (target == "#home" || target == "/") {
    $("html,body").animate(
      { scrollTop: 0 },
      1000,
      "easeInOutExpo"
    );
  }

  else if (window.matchMedia("(max-width: 766px)").matches) {
    $("html,body").animate(
      { scrollTop: 276 },
      1000,
      "easeInOutExpo"
    );
  }

  navbarP.linksli.forEach(link => {
    if (link.childNodes[1].getAttribute("href") == target) {
      console.log("hhh");
      navbarP.highlightStatus = link.id.substring(3);
      navbarM.resizeHighlight(link);
    }
  });

  $("html,body").animate(
    { scrollTop: $(target).offset().top - document.querySelector("header").offsetHeight },
    1000,
    "easeInOutExpo",
  );
});

