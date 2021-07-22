

window.onscroll = function () {
    
  if (window.pageYOffset >= sticky) {
    navbar.setAttribute("class","sticky")
    }
    
};
var navbar = document.getElementById("navBlock");
var sticky = navbar.offsetTop;


var selected = JSON.parse(localStorage.getItem("selectedItem"));
console.log(selected);

document.getElementById("images1").src = selected.image;
document.getElementById("images2").src = selected.image;
document.getElementById("images3").src = selected.image;
document.getElementById("images4").src = selected.image;

document.getElementById("title").innerHTML = selected.title;

document.getElementById("price").innerHTML = `₹${selected.price}`;
document.getElementById("cprice").innerHTML = `₹${selected.cprice}`;

document.getElementById("discount").innerText = `${selected.discount}`;



