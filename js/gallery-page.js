/* =====================================
   TRINITY SANCTUARY GALLERY SCRIPT
===================================== */

document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".gallery-filter button");
    const galleryItems = Array.from(document.querySelectorAll(".gallery-item"));
    const lightbox = document.querySelector(".lightbox");
    const lightboxImage = document.querySelector(".lightbox img");
    const closeLightbox = document.querySelector(".close-lightbox");

    let currentIndex = 0;

    /* =====================================
       FILTER GALLERY
    ===================================== */
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const filter = button.dataset.filter;

            galleryItems.forEach(item => {
                if (filter === "all" || item.classList.contains(filter)) {
                    item.classList.remove("hide");
                    item.classList.add("show");
                } else {
                    item.classList.remove("show");
                    item.classList.add("hide");
                }
            });
        });
    });

    /* =====================================
       LIGHTBOX & NAVIGATION
    ===================================== */
    function getVisibleItems() {
        return galleryItems.filter(item => !item.classList.contains("hide"));
    }

    function showImage(index) {
        const visibleItems = getVisibleItems();
        if (visibleItems.length === 0) return;

        if (index < 0) index = visibleItems.length - 1;
        if (index >= visibleItems.length) index = 0;

        currentIndex = index;
        const img = visibleItems[currentIndex].querySelector("img");

        lightboxImage.src = img.src;
        lightboxImage.alt = img.alt;
    }

    galleryItems.forEach((item) => {
        item.addEventListener("click", () => {
            const visibleItems = getVisibleItems();
            const idx = visibleItems.indexOf(item);
            if (idx !== -1) {
                showImage(idx);
                lightbox.classList.add("active");
                document.body.style.overflow = "hidden";
            }
        });
    });

    /* =====================================
       CLOSE LIGHTBOX
    ===================================== */
    function closeGallery() {
        lightbox.classList.remove("active");
        document.body.style.overflow = "auto";
    }

    if (closeLightbox) closeLightbox.addEventListener("click", closeGallery);

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            closeGallery();
        }
    });

    /* =====================================
       KEYBOARD CONTROLS (ESC, LEFT, RIGHT)
    ===================================== */
    document.addEventListener("keydown", (e) => {
        if (!lightbox.classList.contains("active")) return;

        if (e.key === "Escape") {
            closeGallery();
        } else if (e.key === "ArrowLeft") {
            showImage(currentIndex - 1);
        } else if (e.key === "ArrowRight") {
            showImage(currentIndex + 1);
        }
    });
});