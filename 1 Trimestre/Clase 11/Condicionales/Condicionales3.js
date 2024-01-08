const prompt = require("prompt-sync")();

entrada = prompt("Introduce tus estudios: ");

estudios(entrada.toUpperCase());

function estudios(modulo) {
  switch(modulo) {
    case "DAW":
      console.log("Estoy matriculado en DAW");
      break;
    case "DAM":
      console.log("Estoy matriculado en DAM");
      break;
    default:
      console.log("Estoy matriculado en otro movidote");
  }
}