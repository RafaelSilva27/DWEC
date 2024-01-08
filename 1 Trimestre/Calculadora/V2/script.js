'use strict'
document.addEventListener("DOMContentLoaded", () => {

  //ZONA DE DECLARACION DE VARIABLES
  const op1 = document.querySelector("#op1");
  const op2 = document.querySelector("#op2");
  const btnsuma = document.querySelector("#suma");
  const btnpotencia = document.querySelector("#potencia");
  const eltoResultado = document.querySelector("#resultado");


  //ZONA DE LISTENER-EVENTOS
  btnsuma.addEventListener("click", () => {
    let resultado = sumar(op1.value, op2.value);
    escribirDOM(resultado, eltoResultado);
  })

  btnpotencia.addEventListener("click", () => {
    let resultado = potencia(op1.value, op2.value);
    escribirDOM(resultado, eltoResultado);
  })



  //ZONA DE FUNCIONES
  function sumar(op1, op2) {
    let res = +op1 + +op2;
    return res;
    //let res2 = Number.parseInt(op1) + Number.parseInt(op2);
    //let res3 = Number(op1) + Number(op2);
  }

  function potencia(op1, op2){
    let res = Math.pow(+op1 , +op2);
    return res;
  }

  function escribirDOM(mensaje,componenteDOM) {
    componenteDOM.innerHTML = ` <h3> ${mensaje} </h3>`
  }

});