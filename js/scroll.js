$(".nav-link").click(function (e) {
  e.preventDefault();
  var target = $(this).attr("href");
  $("html,body").animate(
    {
      scrollTop: $(target).offset().top - (window.matchMedia("(max-width: 766px)").matches ? 276 : document.querySelector("header").offsetHeight),
    },
    1000,
    "easeInOutExpo"
  );
});

