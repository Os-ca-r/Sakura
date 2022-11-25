const up= document.querySelector("#toTop");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    up.style.display="block"
  } else {
    up.style.display="none"
  }
})