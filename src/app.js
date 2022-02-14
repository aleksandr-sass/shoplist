//Нужно отсортировать по отделам (фрукты, бакалея, мясо, рыба)
const arr = Object.values(obj).flat();

let header = document.querySelector("h1");
let listButton = document.querySelector("#listButton");
let list = document.querySelector("#list");
let categoryButton = document.querySelector("#categoryButton");
let category = document.querySelector("#category");
let listFromCategoryButton = document.querySelector("#listFromCategoryButton");
let cartButton = document.querySelector("#cartButton");
let cart = document.querySelector("#cart");
let upButton = document.querySelector("#upButton");

listButton.addEventListener("click", showList);
categoryButton.addEventListener("click", showCategory);
listFromCategoryButton.addEventListener("click", showListFromCategory);
cartButton.addEventListener("click", showCart);
upButton.addEventListener("click", goUp);

function showList() {
  if (!list || !cart  || !category) return;
  cart.innerHTML = '';
  category.innerHTML = '';
  list.innerHTML = arr
    .map((el) => `<p><label><input type='checkbox' id="${el}">${el}</label></p>`)
    .join('');  
  cartButton.classList.remove("hidden");
  listFromCategoryButton.classList.add("hidden");
  upButton.classList.remove("hidden");
}

function showCategory() {
  if (!list || !cart  || !category) return;
  list.innerHTML = '';
  cart.innerHTML = '';
  category.innerHTML = Object
    .keys(obj)
    .map((el) => `<p><label><input type='checkbox' id="${el}">${el}</label></p>`)
    .join('');
  cartButton.classList.add("hidden");
  listFromCategoryButton.classList.remove("hidden");
  upButton.classList.remove("hidden");
}

function showListFromCategory() {
  if (!list || !cart  || !category) return;
  cart.innerHTML = '';
  let selectedCategories = Array
    .from(category.querySelectorAll("input"))
    .filter((el) => el.checked)
    .map((el) => `${el.id}`);
  let selectedProducts = Object
    .entries(obj)
    .filter((el) => selectedCategories.includes(el[0]))
    .map((el) => el[1])
    .flat();
  list.innerHTML = selectedProducts
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

function goUp() {
  header.scrollIntoView();
}