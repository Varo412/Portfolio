// navbarP = {
//   header: document.getElementById("#header"),
//   sticky: header.offsetTop,
// };

// navbarM = {
//   stickBar: function () {
//     if (window.pageYOffset > navbarP.sticky) {
//       navbarP.header.classList.add("sticky");
//     } else {
//       navbarP.header.classList.remove("sticky");
//     }
//   },
// };

window.onscroll = function () {
  navbarM.stickBar();
};

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// Get the header
var header = document.querySelector("header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
