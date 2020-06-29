// scrollP = {
//   scrollPosition: 0,
//   navRefs: document.querySelectorAll("header ul a"),
//   route: null,
//   timeInterval: null,
//   scrollEnd: 0,
//   padding: document.querySelector("header").offsetHeight,
// };

// scrollM = {
//   startScroll: function () {
//     // document.addEventListener("scroll", scrollM.parallaxEfect);
//     console.log("navbar height", scrollP.padding);
//     for (var i = 0; i < scrollP.navRefs.length; i++) {
//       scrollP.navRefs[i].addEventListener("click", scrollM.scrollTo);
//     }
//   },

//   scrollTo: function (routeDest) {
//     routeDest.preventDefault();
//     scrollP.route = routeDest.target.getAttribute("href");
//     scrollP.scrollEnd =
//       document.querySelector(scrollP.route).offsetTop +
//       document.querySelector(scrollP.route).scrollTop +
//       document.querySelector(scrollP.route).clientTop;
//     console.log("ivan", document.querySelector(scrollP.route));
//     console.log("meta", scrollP.scrollEnd);
//     scrollP.timeInterval = setInterval(function () {
//       if (scrollP.scrollPosition < scrollP.scrollEnd) {
//         scrollP.scrollPosition += 50;
//         if (scrollP.scrollPosition >= scrollP.scrollEnd) {
//           scrollP.scrollPosition = scrollP.scrollEnd - scrollP.padding;
//           console.log("estoy en el fin", scrollP.scrollPosition);
//           clearInterval(scrollP.timeInterval);
//         }
//       } else {
//         scrollP.scrollPosition -= 50;
//         if (scrollP.scrollPosition <= scrollP.scrollEnd) {
//           scrollP.scrollPosition = scrollP.scrollEnd - scrollP.padding;
//           clearInterval(scrollP.timeInterval);
//         }
//       }
//       window.scrollTo(0, scrollP.scrollPosition);
//     }, 50);
//   },

//   // parallaxEfect: function () {
//   //   scrollP.scrollPosition = window.pageYOffset;
//   // },
// };

// scrollM.startScroll();

//-------------------------------------

// scrollP = {
//   route: null,
//   interval: null,
// };

// scrollM = {
//   scrollTo: function (route) {
//     route.preventDefault();
//     scrollP.route = route.target.getAttribute("href");
//     window.scrollTo(0, document.querySelector(scrollP.route).offsetTop);
//   },
// };

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

