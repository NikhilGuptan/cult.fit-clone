
function place(){
     
    let name = document.getElementById("Name").value;
    let number = document.getElementById("Num").value;
    let date = document.getElementById("exp").value;
    let cvv = document.getElementById("cv").value;
   
    if (name != "" && number.length == 16 && cvv.length == 3) {
        setTimeout(function () {
            window.location.href = "ThankYouPopUp.html";
        },2000)
    } else {
        alert("Check All Field")
   }
}
   

function backTostore() {
        
    window.location.href = "card.html";

}