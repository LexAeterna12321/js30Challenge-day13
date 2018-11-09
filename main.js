const slideHandle = () => {
    const SliderImages = document.querySelectorAll(".slide-in");
    const windowBottom = window.scrollY + window.innerHeight;
    SliderImages.forEach(img => {
        const imgBottom = img.offsetTop + img.height;
        const imgMiddle = img.offsetTop + img.height / 2;

        if (windowBottom > imgMiddle && window.scrollY < imgBottom) {
            img.classList.add("active");
        } else {
            img.classList.remove("active");
        }
    })


}


window.addEventListener("scroll", debounce(slideHandle));