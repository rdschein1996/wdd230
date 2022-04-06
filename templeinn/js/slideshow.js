let slideIndex = 0;
showSlides();
showSlides2();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slidesImg");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); 
}

function showSlides2() {
    let i;
    let slides = document.getElementsByClassName("slidesImg2");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides2, 4000); 
  }