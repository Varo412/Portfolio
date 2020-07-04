carouselP = {
    height: null,
    images: document.querySelectorAll(".carousel img"),
};

carouselM = {
    init: function () {
        carouselM.setHeight();
    },

    setHeight: function () {
        carouselP.images.forEach(pic => {
            if (pic.height > carouselP.height) carouselP.height = pic.height;
            console.log("altura", pic.height);

        });
        console.log("Carousel height:", carouselP.height);

        document.querySelector(".carousel").height = carouselP.height;
    }
}

carouselM.init();