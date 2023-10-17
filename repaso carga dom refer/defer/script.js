'use strict'

//ZONA DECLARACION DE VARIABLES
const btn1 = document.querySelector("#boton1");
const btn2 = document.querySelector("#boton2");
const parr1 = document.querySelector("#p1");
const parr2 = document.querySelector("#p2");



//ZONA DE EVENTOS-LISTENER
btn1.addEventListener("click", () =>{
  escribirDOM("hola que tal",parr1);
})

btn2.onclick = () => {
  escribirDOM("fffss",parr2);
}

//ZONA DE FUNCIONES
function escribirDOM(mensaje,componenteDOM) {
  componenteDOM.innerHTML = ` <h3> ${mensaje} </h3>`
}