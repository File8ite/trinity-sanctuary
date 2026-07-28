const sliders = document.querySelectorAll(".slider");

sliders.forEach((slider) => {

    const images = slider.querySelectorAll(".slider-image");

    let current = 0;

    setInterval(() => {

        images[current].classList.remove("active");

        current = (current + 1) % images.length;

        images[current].classList.add("active");

    }, 4000);

});