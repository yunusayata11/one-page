document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".lightbox-trigger");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".close");

    images.forEach(image => {
        image.addEventListener("click", function() {
            lightbox.style.display = "flex";
            lightboxImg.src = this.src;
            lightboxImg.style.opacity = "0";
            setTimeout(() => {
                lightboxImg.style.opacity = "1";
            }, 100);
        });
    });

    closeBtn.addEventListener("click", function() {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", function(event) {
        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
});
