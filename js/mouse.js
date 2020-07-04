mouseP = {
    area: document.querySelector("#mouseEffect"),
    images: document.querySelectorAll("#mouseEffect img"),
    mouseX: null,
    mouseY: null,
}

mouseM = {
    mouseInit: function () {
        mouseP.area.addEventListener("mousemove", mouseM.mouseMotion);
        // mouseP.figures.forEach((pic, index) => {
        //     pic.style.zIndex = mouseP.figures.length - index + 1;

        // });
    },

    mouseMotion: function (mouse) {
        mouseP.mouseX = -mouse.offsetX;
        // mouseP.mouseY = -mouse.offsetY;

        mouseP.images.forEach((pic, index) => {
            pic.style.left = `${mouseP.mouseX / (index * 100 + 50)}%`;

        });
    }
}

mouseM.mouseInit();

$(document).ready(function () {
    var imageHeight = $("#mouseEffect img:first-child").height()
    // var imageWidth = $("#mouseEffect img:first-child").width()
    $("#mouseEffect").css('height', imageHeight);
    // $("#mouseEffect").css('width', imageWidth);
});
$(window).resize(function () {
    var imageHeight = $("#mouseEffect img:first-child").height()
    // var imageWidth = $("#mouseEffect img:first-child").width()
    $("#mouseEffect").css('height', imageHeight);
    // $("#mouseEffect").css('width', imageWidth);
});