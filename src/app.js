//Нужно отсортировать по отделам (фрукты, бакалея, мясо, рыба)
let listButton = document.querySelector("#listButton");
let list = document.querySelector("#list");
let cartButton = document.querySelector("#cartButton");
let cart = document.querySelector("#cart");

listButton.addEventListener("click", showList);
cartButton.addEventListener("click", showCart);

function showList() {
  if (!list || !cart) return;
  cart.innerHTML = '';
  list.innerHTML = arr
    .map((el) => `<p><label><input type='checkbox' id="${el}">${el}</label></p>`)
    .join('');  
  cartButton.classList.remove("hidden");
}
  
function showCart() {
  if (!cart) return;
  cart.innerHTML = Array
    .from(list.querySelectorAll("input"))
    .filter((el) => el.checked)
    .map((el) => `<li>${el.id}</li>`)
    .join('');
  cart.scrollIntoView();
}