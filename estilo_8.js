let div = document.querySelector("div");

let source = document.getElementById("source");
let destination = document.getElementById("destination");

/*
div.style.height = "500px";
div.style.width = "500px";
div.style.backgroundColor = "blue";
*/

//div.classList.add("square");

setInterval(function(){ div.classList.toggle("square"); }, 1000);

destination.innerText = source.innerHTML;