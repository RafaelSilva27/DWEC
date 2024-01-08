const prompt = require("prompt-sync")();

let edad1 = Number.parseInt(prompt("Introduce la primera edad: ", ""));
let edad2 = Number.parseInt(prompt("Introduce la segunda edad: ", ""));

function edad(edad1, edad2) {
  if (edad1 > edad2) {
    console.log("La edad 1 es mayor");
  } else {
    if (edad1 < edad2) {
      console.log("La edad 2 es mayor");
    } else {
      console.log("Tienen la misma edad");
    }
  }
}

edad(edad1, edad2);

