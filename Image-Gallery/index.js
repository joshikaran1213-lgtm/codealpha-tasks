// Select all gallery images
const images = document.querySelectorAll(".gallery img");

// Lightbox elements
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

// Current image index
let currentIndex = 0;

// Open Lightbox
function openLightbox(index) {
    currentIndex = index;
    lightbox.style.display = "flex";
    lightboxImg.src = images[currentIndex].src;
}

// Close Lightbox
function closeLightbox() {
    lightbox.style.display = "none";
}

// Next / Previous Image
function changeImage(step) {
    currentIndex += step;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    lightboxImg.src = images[currentIndex].src;
}

// Close when clicking outside image
lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Keyboard Navigation
document.addEventListener("keydown", function (e) {

    if (lightbox.style.display === "flex") {

        if (e.key === "ArrowRight") {
            changeImage(1);
        }

        if (e.key === "ArrowLeft") {
            changeImage(-1);
        }

        if (e.key === "Escape") {
            closeLightbox();
        }

    }
});

// =======================
// Bonus: Image Filtering
// =======================

function filterSelection(category) {

    const items = document.querySelectorAll(".gallery .image");

    items.forEach(item => {

        if (category === "all") {
            item.classList.remove("hide");
        }

        else if (item.classList.contains(category)) {
            item.classList.remove("hide");
        }

        else {
            item.classList.add("hide");
        }

    });

}