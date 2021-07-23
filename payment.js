
function place(){
     
    let name = document.getElementById("Name").value;
    let number = document.getElementById("Num").value;
    let date = document.getElementById("exp").value;
    let cvv = document.getElementById("cv").value;
   
    if (name != "" && number.length == 16 && cvv.length == 3) {
        window.location.href = "ThankYouPopUp.html";
    } else {
        alert("Check All Field")
   }
}
   

function backTostore() {
        
    window.location.href = "card.html";

}