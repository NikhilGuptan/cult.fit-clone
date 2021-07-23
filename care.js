
window.onscroll = function () {
    
  if (window.pageYOffset >= sticky) {
    navbar.setAttribute("class","sticky")
    }
    
};
var navbar = document.getElementById("navBlock");
var sticky = navbar.offsetTop;

function slidShow(){

        let arr = ["https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:595/dpr_2/image/vm/9eb790db-ec1d-4c69-873f-7af95bbdbb4f.png","https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:595/dpr_2/image/vm/e36b3f6d-dfb0-45f3-9aad-b796be71762d.png","https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:595/dpr_2/image/vm/6763c838-6eb3-4c1c-b82b-e9c703dc91e5.jpg"];

        let div = document.getElementById("slidShow")
        let img = document.createElement("img");
        let i = 0;
        img.src = arr[0];

        div.append(img)

        setInterval(function(){

            if(i==arr.length){
                i=0;
            }

            img.src = arr[i];
            i++;

        },2000)

    }

    slidShow();

function goToHome() {
        window.location.href = "home.html"
}
    
function card() {

    window.location.href = "card.html";

}