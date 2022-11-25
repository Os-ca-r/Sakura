// //order cart//
// let shop =document.getElementById("shop");


// let shopItemsData = [
//     {
//       id: "num1",
//       name: "Beef tataki",
//       price: 45,
//     },
//     {
//       id: "ioytrhndcv",
//       name: "tuna",
//       price: 100,
      
//     },
//     {
//       id: "wuefbncxbsn",
//       name: "chicken",
//       price: 25,
     
//     },
//     {
//       id: "thyfhcbcv",
//       name: "fish",
//       price: 300,
      
//     },
//   ];

// let generateShop =() => {
//     return(shop.innerHTML `
//     <h5>Tuna Tataki</h5>`)
// }

// const divList = document.querySelector('.listHolder');

// const addBtn = document.querySelector('#addBtn');

// function addLists() {

//     const ul = divList.querySelector('ul');
//     const li = document.createElement('li');
//     ul.appendChild(li);
//     createBtn(li);
// }

// // add list when clicked on add item button
// addBtn.addEventListener('click', () => {
//   addLists();
// });

// // add list when pressed enter
// addInput.addEventListener('keyup', (event) => {
//   if(event.which === 13) {
//     addLists();
//   }
// });
var addBtn = document.getElementsByClassName('addBtn');

addBtn.addEventListener('click', addItem);

function addItem() {
  let title = document.getElementsByClassName('shop-item-title')[0].innerText
  addToCart(title)
}
function addToCart(title){
  let cartRow = document.createElement('div')
  cartRow.innerText = title
  var cartItems = document.getElementsByClassName('cart-items')[0]
  cartItems.append(cartRow)
}
console.log(title)