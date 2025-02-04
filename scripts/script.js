// Function to open linked pages when clicking on gallery items
function openImage(url) {
    window.location.href = url;
}

// Function to enable zoom effect on images
document.addEventListener("DOMContentLoaded", function () {
    const galleryItems = document.querySelectorAll(".gallery-item img");

    galleryItems.forEach((img) => {
        img.addEventListener("click", function (event) {
            event.stopPropagation(); // Prevent triggering openImage function
            openLightbox(img.src, img.nextElementSibling.textContent);
        });
    });
});

// Function to create a lightbox effect for zooming images
function openLightbox(imageSrc, text) {
    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");

    const overlay = document.createElement("div");
    overlay.classList.add("lightbox-overlay");
    overlay.addEventListener("click", () => document.body.removeChild(lightbox));

    const img = document.createElement("img");
    img.src = imageSrc;
    img.classList.add("lightbox-img");

    const caption = document.createElement("p");
    caption.textContent = text;
    caption.classList.add("lightbox-caption");

    lightbox.appendChild(overlay);
    lightbox.appendChild(img);
    lightbox.appendChild(caption);

    document.body.appendChild(lightbox);
}
