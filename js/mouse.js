mouseP = {
    area: document.querySelector("#mouseEffect"),
    images: document.querySelectorAll("#mouseEffect img"),
    mouseX: null,
    windowsMotionLimit: window.screen.width * 0.9,
    motionArea: document.querySelectorAll("#mouseEffect img")[0].width - window.screen.width,
    initialPosition: 0,
    /* 0.9 is the largest measured value so the functions works fine in most of the devices */
}

mouseM = {
    mouseInit: function () {
        console.log("Anchura total", window.screen.width);
        console.log("límite movimiento (desuso)", mouseP.windowsMotionLimit);

        mouseP.area.addEventListener("mouseenter", mouseM.enterIntoArea);

        mouseP.area.addEventListener("mousemove", mouseM.mouseMotion);
        console.log("Margen entre display e imagen", mouseP.motionArea);

    },

    enterIntoArea: function (mouse) {
        mouseP.initialPosition = mouse.offsetX
        // console.log("entró", mouseP.initialPosition);

        // mouseP.images.forEach((pic, index) => {
        //     var weighing = index * 100 + 50;
        //     // var value = (mouseP.initialPosition) / weighing;
        //     // pic.style.left = `${value}%`;
        //     pic.style.left = "0";
        //     // console.log(index, pic.style.left)

        // });
    },

    mouseMotion: function (mouse) {


        // if (mouse.offsetX < mouseP.motionArea) {
        if (mouse.offsetX < mouseP.windowsMotionLimit) {
            console.log("Posicion cursor", mouse.offsetX)

            mouseP.mouseX = -mouse.offsetX;

            mouseP.images.forEach((pic, index) => {
                // var weighing = index * 100 + 50;
                var value = (-mouseP.initialPosition + mouse.offsetX) / (index * 100 + 50);
                pic.style.left = `${value}%`;

            });
        }
        console.log("left", mouseP.images[0].style.left);

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