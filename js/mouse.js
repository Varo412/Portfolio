mouseP = {
    area: document.querySelector("#mouseEffect"),
    figures: document.querySelectorAll("#mouseEffect figure"),
}

mouseM = {
    mouseInit: function () {
        mouseP.area.addEventListener("mousemove", mouseM.mouseMotion);
        // mouseP.figures.forEach((pic, index) => {
        //     pic.style.zIndex = mouseP.figures.length - index + 1;

        // });
    },

    mouseMotion: function (mouse) { console.log(mouse.offsetX, mouse.offsetY) }
}

mouseM.mouseInit();

$(document).ready(function () {
    var imageHeight = $("#mouseEffect img:first-child").height()
    var imageWidth = $("#mouseEffect img:first-child").width()
    $("#mouseEffect").css('height', imageHeight);
    $("#mouseEffect").css('width', imageWidth);
});
$(window).resize(function () {
    var imageHeight = $("#mouseEffect img:first-child").height()
    var imageWidth = $("#mouseEffect img:first-child").width()
    $("#mouseEffect").css('height', imageHeight);
    $("#mouseEffect").css('width', imageWidth);
});