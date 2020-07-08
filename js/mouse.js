mouseP = {
    area: document.querySelector("#mouseEffect"),
    images: document.querySelectorAll("#mouseEffect img"),
    mouseX: null,
    mouseY: null,
    motion: null,
}

mouseM = {
    mouseInit: function () {
        mouseP.motion = true;
        mouseP.area.addEventListener("mousemove", mouseM.mouseMotion);
        // mouseP.figures.forEach((pic, index) => {
        //     pic.style.zIndex = mouseP.figures.length - index + 1;

        // });
    },

    mouseMotion: function (mouse) {
        mouseP.mouseX = -mouse.offsetX;
        // mouseP.mouseY = -mouse.offsetY;

        // console.log("left", mouseP.images[0].style);


        if (mouseP.mouseX / 50 > -43) { //fin primera imagen
            mouseP.images.forEach((pic, index) => {
                var weighing = index * 100 + 50;
                var value = mouseP.mouseX / weighing;

                // if (value < -43) {
                //     pic.style.left = "43%";
                //     mouseP.motion = false;
                // }
                // else {
                //     pic.style.left = `${mouseP.mouseX / weighing}%`;
                //     mouseP.motion = true;
                // }


                pic.style.left = `${value}%`;

            });
        }







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