$(document).ready(function () {
    var imageHeight = $("#mouseEffect img:first-child").height();
    $("#mouseEffect").css('height', imageHeight);
});


$(window).resize(function () {
    var imageHeight = $("#mouseEffect img:first-child").height();
    $("#mouseEffect").css('height', imageHeight);

    console.log("#nav" + navbarP.highlightStatus);
    console.log(document.querySelector("#nav" + navbarP.highlightStatus).offsetWidth + "px");
    navbarP.highlight.style.width = document.querySelector("#nav" + navbarP.highlightStatus).offsetWidth + "px"
});

