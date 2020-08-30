mouseP = {
    area: document.querySelector("#mouseEffect"),
    images: document.querySelectorAll("#mouseEffect img"),
    mouseX: null,
    windowsMotionLimit: window.screen.width * 0.9,
    /* 0.9 is the largest measured value so the functions works fine in most of the devices */
}

mouseM = {
    mouseInit: function () {
        mouseP.motion = true;
        mouseP.area.addEventListener("mousemove", mouseM.mouseMotion);
    },

    mouseMotion: function (mouse) {
        if (mouse.offsetX < mouseP.windowsMotionLimit) {

            mouseP.mouseX = -mouse.offsetX;

            mouseP.images.forEach((pic, index) => {
                var weighing = index * 100 + 50;
                var value = mouseP.mouseX / weighing;
                pic.style.left = `${value}%`;

            });
        }
    }
}

mouseM.mouseInit();

$(document).ready(function () {
    var imageHeight = $("#mouseEffect img:first-child").height();
    $("#mouseEffect").css('height', imageHeight);
});
$(window).resize(function () {
    var imageHeight = $("#mouseEffect img:first-child").height();
    $("#mouseEffect").css('height', imageHeight);
});