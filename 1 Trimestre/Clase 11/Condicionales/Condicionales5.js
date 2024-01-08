const prompt = require("prompt-sync")();

let estudios = prompt("Introduce tus estudios: ").toUpperCase();

if ((estudios == "DAM") || (estudios == "DAW") || (estudios == "ASIR")) {
  console.log("Estas cursando uos estudios de grado superior de informatica");
} else {
  console.log("No estas cursando uos estudios de grado superior de informatica");
}

let paro = prompt("Estas en paro: ").toString().toUpperCase();

if ((paro == "SI") && ((estudios == "DAM") || (estudios == "DAW"))) {
  console.log("Tienes derecho a una beca");
} else {
  console.log("No tienes derecho a una beca");
}