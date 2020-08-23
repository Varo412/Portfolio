$(document).ready(windowWidth);


$(window).resize(windowWidth);

function windowWidth() {
    var imageHeight = $("#mouseEffect img:first-child").height();
    $("#mouseEffect").css('height', imageHeight);

    if (window.matchMedia("(max-width: 750px)").matches) {
        navbarP.toggleView = true
        $("#linksBox").css({ "text-align": "center", "margin-right": "0" });
        $("#highlight").css("visibility", "hidden");

    }
    else {
        navbarP.toggleView = false;
        $("#linksBox").css({ "text-align": "left", "margin-right": "3rem" });
        navbarM.resizeHighlight(document.querySelector("#nav" + navbarP.highlightStatus));
        $("#highlight").css("visibility", "visible");
    }
}

