//Нужно отсортировать по отделам (фрукты, бакалея, мясо, рыба)
let listButton = document.querySelector("#listButton");
let list = document.querySelector("#list");
let formButton = document.querySelector("#formButton");

listButton.addEventListener("click", showList);

function showList() {
  if (!list) return;
  list.innerHTML = arr
    .map((el) => `<p><input type='checkbox' id="${el}">${el}</p>`)
    .join('');  
  formButton.classList.remove("hidden");
}
  
  function calculate()
  {
    var sl=document.getElementById("shop_list");
    if (!sl) return;
    sl.innerHTML="";
  
  
    var list="";
    for(var val of arr)
    {
      var order=document.getElementById(val);
      if(order.checked==true) list+="<li>"+val+"</li>";
    }
  
    sl.innerHTML="<ul>"+list+"</ul>";
  
    scrollIntoShopList();
  }
  
  function scrollIntoShopList() {
    let shopList = document.querySelector("#shop_list");
    shopList.scrollIntoView();
  }