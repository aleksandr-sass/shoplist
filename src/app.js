//Нужно отсортировать по отделам (фрукты, бакалея, мясо, рыба)
function form1()
  {
    var sm=document.getElementById("shop_");
    if (!sm) return;
    sm.innerHTML="";
    
    var cart="";
    for(var val of arr)
    {
      cart+="<p><input type='checkbox' id='"+val+"'>"+val+"</p>";
    }
    
    sm.innerHTML=cart;
  
    showFormButton();	
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
  
  function showFormButton() {
    let formButton = document.querySelector("#form");
    formButton.classList.remove("hidden");
  }
  
  function scrollIntoShopList() {
    let shopList = document.querySelector("#shop_list");
    shopList.scrollIntoView();
  }