let body = document.querySelector("body");

body.addEventListener("mousemove", function (info) {
  let imagen = document.querySelector("img");
  imagen.style.top = info.clientY;
  imagen.style.left = info.clientX;
});

let foto = document.getElementById("magic");

foto.addEventListener("mouseover", function () {
  this.style.display = "none";
});

let color = document.querySelector("input");

color.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
      body.style.backgroundColor = color.value;
      color.value = "";
  }
  if (event.keyCode === 46 || event.keyCode === 8) {
      body.style.backgroundColor = "white";
       color.value = "";
  }
});
