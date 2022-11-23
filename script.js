const backToTopButton = document.querySelector("toTop");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 300) { // Show backToTopButton

      backToTopButton.style.display = "block";
    }else{
    backToTopButton.style.display = "none";;
    }
}