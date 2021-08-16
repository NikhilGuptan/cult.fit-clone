

window.onscroll = function () {
    
  if (window.pageYOffset >= sticky) {
    navbar.setAttribute("class","sticky")
    }
    
};
var navbar = document.getElementById("navBlock");
var sticky = navbar.offsetTop;


var selected = JSON.parse(localStorage.getItem("selectedItem"));


document.getElementById("images1").src = selected.image;
document.getElementById("images2").src = selected.image;
document.getElementById("images3").src = selected.image;
document.getElementById("images4").src = selected.image;

document.getElementById("title").innerHTML = selected.title;

document.getElementById("price").innerHTML = `₹${selected.price}`;
document.getElementById("cprice").innerHTML = `₹${selected.cprice}`;

document.getElementById("discount").innerText = `${selected.discount}`;




function itemAddedToCard(){

  let arr;
    arr = localStorage.getItem('itemAddedToCard');

    if (arr == null) {
        arr = [];
    } else {
        
        arr=JSON.parse(localStorage.getItem('itemAddedToCard'))
    }

  var flag = true;
  
  arr.forEach(function(el){
    if (el.price == selected.price) {
      flag = false;
      }
  })

  if (flag) {
      
      arr.push(selected)

  localStorage.setItem('itemAddedToCard', JSON.stringify(arr))

  alert("item Added To Cart")
  
buyNow();
    
  } else {
    alert("Item already added");
    }

    
  

}

function buyNow() {

  var items = JSON.parse(localStorage.getItem("itemAddedToCard"));

  if (items.length>0) {
    document.getElementById("buyNow").innerHTML = `View Cart(${items.length})`;
} else {
   document.getElementById("buyNow").innerHTML = `buy Now`;
  }

}

buyNow();

// going to cardPage

function cardPage() {

  let buyNow = document.getElementById("buyNow").innerHTML;
  if (buyNow == "buy Now") {
    alert("Please Add Some Item")
  } else {
    window.location.href = "../card/card.html";
  }

}


function goToHome() {
        window.location.href = "../home.html"
}
    
function card() {

    window.location.href = "../card/card.html";

}