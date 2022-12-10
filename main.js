
// Get the button
let mybutton = document.getElementById("backtotop");

// When the user scrolls down 30px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30|| document.documentElement.scrollTop > 30) {
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

//dropdownlist clone
var selectionCounter = 0
function cloneSelect() {
  var br = document.createElement("br")
  var select = document.getElementById("Menu")
  var clone = select.cloneNode(true)
  var name = select.getAttribute("name") + selectionCounter++

  document.getElementById("orderItems").appendChild(clone)



} 

//custom order
var div = document.getElementById('Order');

function addOrder() {
  var input = document.createElement('input'),
    button = document.createElement('button');
  
  input.placeholder = "Order";
  button.innerHTML = 'X';
  button.onclick = removeOrder;


  div.appendChild(input);
  
  div.appendChild(button);
  input.setAttribute("id","orderInput");
}

function removeOrder() {
  div.removeChild(this.previousElementSibling);
  div.removeChild(this);
}

// add delete buttuons //
document.getElementById('add').addEventListener('click', addOrder);
document.getElementById('remove').addEventListener('click', removeOrder);

//submit and delete//
function deleteSomething(secondValue) {
  alert("are you sure you want to delete this?");
  document.getElementById("caterSubmit").value = "";
}
function submitSomething(secondValue) {
  alert("Success!");
}