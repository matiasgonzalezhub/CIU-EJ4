let boton = document.querySelector("button");

let body = document.querySelector("body");

let parrafo = document.querySelector("p");

/*
boton.addEventListener("click", function () {
    body.insertAdjacentHTML("beforeend", "<p> Beep .. </p>");
    body.classList.toggle("color");
})
*/

let seEjecutaEnEvento = function () {
    body.insertAdjacentHTML("beforeend", "<p> Beep .. </p>");
    body.classList.toggle("color");
};

boton.addEventListener("click", seEjecutaEnEvento )
