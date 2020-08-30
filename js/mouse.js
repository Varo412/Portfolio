mouseP = {
    area: document.querySelector("#mouseEffect"),
    images: document.querySelectorAll("#mouseEffect img"),
    mouseX: null,
    windowsMotionLimit: document.body.clientWidth * 0.9,
    initialPosition: 0,
    offset: 0,
    finalOffset: 0,
    /* 0.9 is the largest measured value so the functions works fine in most of the devices */
}

mouseM = {
    mouseInit: function () {
        mouseP.area.addEventListener("mouseenter", mouseM.enterIntoArea);
        // Centramos imágenes
        mouseP.images.forEach((pic) => {
            pic.style.marginLeft = -(pic.clientWidth - document.body.clientWidth) / 2 + "px"
        })

        mouseP.area.addEventListener("mousemove", mouseM.mouseMotion);
        mouseP.area.addEventListener("mouseout", mouseM.mouseOut);
    },

    enterIntoArea: function (mouse) {
        mouseP.initialPosition = mouse.offsetX
        console.log("Cursor entró en ", mouseP.initialPosition);
    },

    mouseOut: function (mouse) {
        console.log("Cursor salió en ", mouse.offsetX);
        mouseP.finalOffset = mouseP.offset;
        mouseP.offset = 0;
    },

    mouseMotion: function (mouse) {
        // if (mouse.offsetX < mouseP.windowsMotionLimit) {
        console.log("DESPLAZADO", mouseP.initialPosition + 115, mouse.offsetX, mouse.offsetX - mouseP.initialPosition - 115)
        mouseP.offset = mouse.offsetX - mouseP.initialPosition - 115;

        mouseP.mouseX = -mouse.offsetX;

        mouseP.images.forEach((pic, index) => {
            var weighing = index * 180 + 150;
            var value = mouseP.offset / weighing;
        
            pic.style.left = (-value) + "%";

        });
        // }
    }
}

mouseM.mouseInit();