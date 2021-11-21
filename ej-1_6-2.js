let body = document.querySelector("body");
let imagen = document.getElementById("imagen");
var mover = false;

imagen.addEventListener("mousedown", initialClick, false);

imagen.addEventListener("mousedown", initialClick, false);

function move(e) {
  var newX = e.clientX - 10;
  var newY = e.clientY - 10;

  image.style.left = newX + "px";
  image.style.top = newY + "px";
}

function initialClick(e) {
  if (mover) {
    document.removeEventListener("mousemove", move);
    mover = !mover;
    return;
  }

  mover = !mover;
  image = this;

  document.addEventListener("mousemove", move, false);
}

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
