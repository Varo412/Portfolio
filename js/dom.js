domP = {
    sections: document.querySelectorAll("section"),
    windowHeight: window.innerHeight,
};

$(document).ready(windowWidth);


$(window).resize(function () {
    domP.windowHeight = window.innerHeight
    windowWidth();
});

function windowWidth() {
    var imageHeight = $("#mouseEffect img:first-child").height();
    $("#mouseEffect").css('height', imageHeight);

    // if (window.matchMedia("(max-width: 766px)").matches) {
    if (document.body.clientWidth <= 750) {
        console.log("entre");
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

