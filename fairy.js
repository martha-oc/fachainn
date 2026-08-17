document.addEventListener("DOMContentLoaded", () => {

    const overlay = document.getElementById("overlay");
    const overlayImage = document.getElementById("overlay-image");

    const images = document.querySelectorAll(".other-img");
    const nextBtn = document.getElementById("next");
    const prevBtn = document.getElementById("prev");

    let currentIndex = -1;


    function showImage(index) {

        currentIndex = index;

        overlayImage.src = images[currentIndex].src;
        overlayImage.alt = images[currentIndex].alt;

        overlay.classList.add("active");
    }
 function closeGallery() {

        overlay.classList.remove("active");

        overlayImage.src = "";

        currentIndex = -1;
    }


    images.forEach((img, index) => {

        img.addEventListener("click", (e) => {

            e.stopPropagation();

            showImage(index);

        });

    });

    nextBtn.addEventListener("click", (e) => {

        e.stopPropagation();

        showImage(
            (currentIndex + 1) % images.length
        );

    });

 prevBtn.addEventListener("click", (e) => {

        e.stopPropagation();

        showImage(
            (currentIndex - 1 + images.length) % images.length
        );

    });

     overlay.addEventListener("click", (e) => {

        if (e.target === overlay) {
            closeGallery();
        }

    });


    document.addEventListener("keydown", (e) => {

        if (!overlay.classList.contains("active")) {
            return;
        }

        if (e.key === "ArrowRight") {

            showImage(
                (currentIndex + 1) % images.length
            );
  }

        if (e.key === "ArrowLeft") {

            showImage(
                (currentIndex - 1 + images.length) % images.length
            );

        }

        if (e.key === "Escape") {

            closeGallery();

        }

    });

});