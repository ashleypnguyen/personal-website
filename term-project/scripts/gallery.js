let index = 1;

function moveSlides(i) {
    showSlides(index += i)
}

function showSlides(n) {
    const slides = document.getElementsByClassName("slide")

    if (n > slides.length) {
        index = 1
    }

    if (n < 1) {
        index = slides.length
    }

    // hide all the slides - provides carousel effect
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // show them in block for the current index
    slides[index-1].style.display = "block";
}