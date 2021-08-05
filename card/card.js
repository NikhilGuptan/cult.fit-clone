var c=1;
var data_div = document.getElementById("data")


function appendProducts(el) {
    
    let div = document.createElement("div")
    div.setAttribute("id", "box")
    let div1 = document.createElement("div")
    div1.setAttribute("id", "box1")

    let div2 = document.createElement("div")
    div2.setAttribute("id", "box2")

        
    let img1 = document.createElement("img")
    img1.src = "https://static.cure.fit/assets/images/modal-close.svg"
    img1.setAttribute("id", "cross")

    

    img1.addEventListener("click", function () {
        
        let data = JSON.parse(localStorage.getItem("itemAddedToCard"))
        console.log(data);
        var data1 = [];
        
        let priceP = p_price.innerHTML.split("");
        let price = ""
        for (let i = 1; i < priceP.length; i++){
            price += priceP[i];
        }
        price = +(price);
        console.log(price);

        for (let i = 0; i < data.length; i++){
            if (data[i].price != price) {
                data1.push(data[i])
            }
        }
        
        localStorage.setItem('itemAddedToCard', JSON.stringify(data1));
        div.innerHTML = null;
        div.style.height = "0px";
        div.style.width = "0px";

        window.location.reload();
        
    })

    

        let h2_name=document.createElement("p")
        h2_name.innerHTML = el.title;
        
        let p_price=document.createElement("p")
        p_price.innerHTML=`₹${el.price}`

        let text=document.createElement("p")
        text.setAttribute("class","text")
        text.innerHTML="Signature Cameo Design"

        let size=document.createElement("p")
        size.setAttribute("class","text")
        size.innerHTML="Size:M"


        

        // let numItems=document.createElement("div")
        // numItems.setAttribute("id","num")

        // let plus=document.createElement("img")
        // plus.setAttribute("id","plus")
        // plus.src="https://static.cure.fit/assets/images/plus.svg"
        

        // plus.addEventListener("click",function(){
        //     c++
        //     span.innerHTML=c
        // })
        // numItems.append(plus)

        // let span=document.createElement("span")
        // span.setAttribute("id","span")
        // span.innerHTML=c
        // numItems.append(span)

        // let minus=document.createElement("img")
        // minus.setAttribute("id","minus")
        // minus.src="https://static.cure.fit/assets/images/minus.svg"
        // minus.addEventListener("click",function(){
        //     c--
        //     span.innerHTML=c
        // })
        // numItems.append(minus)

        div2.append(img1,h2_name,text,size,p_price)

let img=document.createElement("img")
img.src=el.image


div1.append(img,div2)
div.append(div1)
data_div.append(div)

}

function  showCard(){

let data=JSON.parse(localStorage.getItem("itemAddedToCard"))
//console.log(data)
//data_div.innerHTML=null
data.forEach(function(el){
    appendProducts(el)
})

}

showCard()

var N=0;
var d=0;
var p;
var t=0;
var dat=JSON.parse(localStorage.getItem("itemAddedToCard"))
//  let block=document.createElement("div")
//     div.setAttribute("id","block")
//     let price_block=document.createElement("div")
//     price_block.setAttribute("id","box1")

var sp=document.getElementById("price")
dat.forEach(function(el){
    N+=Number(el.cprice)
});
sp.innerHTML+=`₹${N}`
     
var dis = document.getElementById("dis");
var tot = document.getElementById("tot");

function showingDis() {

    for (let i = 0; i < dat.length; i++){

        let discountWithstring = dat[i].discount;
        let arr = "" + discountWithstring[0] + discountWithstring[1];
        let discountPercent = +[arr];
        let cprice = dat[i].cprice;
        let discountWeGet = Math.floor((cprice * discountPercent) / 100);

        d += discountWeGet;
        //console.log(d);

        dis.innerHTML = `₹${d}`;
    }

    // tot.innerHTML = `₹${N - d-1}`;
    if (N - d - 1 == -1) {
        tot.innerHTML = "₹0";
    } else {
        tot.innerHTML = `₹${N - d-1}`;
    }

}

showingDis();

function goToPayMoney(){

    let data = JSON.parse(localStorage.getItem("itemAddedToCard"));
    if (data == "") {
        alert("Nothing Select for purchase..")
    } else {
        window.location.href = "../payment/payment.html";    
    }


    

}

// complete