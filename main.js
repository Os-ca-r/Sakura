
// Get the button
let mybutton = document.getElementById("backtotop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20|| document.documentElement.scrollTop > 20) {
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

var div = document.getElementById('Order');

function addOrder() {
  var input = document.createElement('input'),
    button = document.createElement('button');
  
  input.placeholder = "Order";
  button.innerHTML = 'X';
  // attach onlick event handler to remove button
  button.onclick = removeOrder;
  
  div.appendChild(input);
  div.appendChild(button);
}

function removeOrder() {
  // remove this button and its input
  div.removeChild(this.previousElementSibling);
  div.removeChild(this);
}

// attach onclick event handler to add button
document.getElementById('add').addEventListener('click', addOrder);
// attach onclick event handler to 1st remove button
document.getElementById('remove').addEventListener('click', removeOrder);
