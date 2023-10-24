const prompt = require("prompt-sync")();

let edad = Number.parseInt(prompt("Introduce tu edad: ", ""));

if (edad < 15) {
  console.log("edad menor que 15");
} else {
  console.log("edad mayor que 15");
}
console.log("adios");