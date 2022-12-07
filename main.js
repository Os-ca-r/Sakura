
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
   
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


//orderpage
var br = document.createElement("row")
var selectionCounter = 0
function cloneSelect() {
var select = document.getElementById("Menu")
var clone = select.cloneNode(true)
var name = select.getAttribute("name") + selectionCounter++

document.getElementById("orderItems").appendChild(clone)

}

