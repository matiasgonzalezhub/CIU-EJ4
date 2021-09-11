let money = document.getElementById("money");
let miame = document.getElementById("miame");
let fort = document.getElementById("fort");

let imgMoney = document.getElementById("img_money");
let imgMiame = document.getElementById("img_miame");
let imgFort = document.getElementById("img_fort");

money.addEventListener("click", function(){
    imgMoney.classList.toggle("oculto");
})

miame.addEventListener("click", function(){
     imgMiame.classList.toggle("oculto");
})

fort.addEventListener("click", function(){
     imgFort.classList.toggle("oculto");
})


imgMoney.addEventListener("click", function(){
    this.classList.toggle("oculto");
})

imgMiame.addEventListener("click", function(){
     imgMiame.classList.toggle("oculto");
})

imgFort.addEventListener("click", function(){
     imgFort.classList.toggle("oculto");
})