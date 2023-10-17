//Entrada- salida de datos
alert("Hola mundo");
let entrada_datos = prompt("Quien eres?");
console.log("Te llamas: "  + entrada_datos);
console.log(`te llamas ${entrada_datos}`);

//Variables 
let saludar = "hola";
if (true) {
  saludar = "adios";
  console.log(saludar);
}
console.log(saludar);

const numero_pi = 3.14;
//Esto da error porque las constantes no cambian
//numero_pi = "fgfg";
console.log(numero_pi);
let variable_boolean_cierto = "true";
let variable_boolean_falso = "false";

//Concanetacion e intrepetacion de cadenas
let docente = "Rocio Lopez";
const curso = "DAW";
let docente_curso = docente + " profesora de " + curso;
console.log(docente_curso);

let docente_curso2 = `${docente} profesora de ${curso}`;
console.log(docente_curso2);

//Seleccionando elementos del DOM
//let cursoDAW = document.getElementById("cursoDAW");
let cursoDAW = document.querySelector("#cursoDAW");
cursoDAW.innerHTML = ` 
<h2>profesora: ${docente} </h2>
<h3> curso: ${curso} </h3>
`;

//if else
let cursoDAM = document.querySelector("#cursoDAM");
let existe_cursoDAM = false;

if (existe_cursoDAM){
  cursoDAM.innerHTML= "<h3> existe curso DAM</h3>"
} else {
  cursoDAM.innerHTML= "<h3> no existe curso DAM</h3>"
}

//acumulando valores +=
let inforCampanillas = document.querySelector("#inforCampanillas");
inforCampanillas.innerHTML = "<h2> Informacion de Campanillas</h2>";
inforCampanillas.innerHTML += `
<h3>Entre los profesores de Campanillas, uno  de ellos es: ${docente}</h3>
<h3> y entre los cursos que se imparte, uno de ellos es: ${curso}</h3>
`;
let saludo = "<h3>hola mundo</h3>"
imprimirHTML(inforCampanillas, saludo);
imprimirHTML();

//funciones
function imprimirHTML(contenedor, mensaje){
  contenedor.innerHTML += mensaje;
}

function imprimirHTML(){
  inforCampanillas += `
  <h3>Entre los profesores de Campanillas, uno  de ellos es: ${docente}</h3>
  <h3> y entre los cursos que se imparte, uno de ellos es: ${curso}</h3>
  `;
}