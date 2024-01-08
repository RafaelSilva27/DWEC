'use strict'

//ZONA DE VARIABLES
const btnfinalizado = document.getElementById("finalizado");
const btnvolverIntentar = document.getElementById("volverIntentar");
const cuentaRegresiva =  document.getElementById("cuentaRegresiva");
const audioFinal = document.getElementById("audioFinal");
const respuesta1 = document.getElementById("respuesta1");
const respuesta2 = document.getElementById("respuesta2");
const respuesta3 = document.getElementById("respuesta3");
const respuesta4 = document.getElementById("respuesta4");
const respuesta5 = document.getElementById("respuesta5");

var tiempoTerminado;
var intervaloDeTiempo;
var arrayRespuestas = [];
var mensaje = "";

//ZONA DE EVENTOS
btnfinalizado.addEventListener("click", () => {
    finalizado();
});

btnvolverIntentar.addEventListener("click", () => {
    volverAIntentar();
});

//MAIN
comenzarCuentaRegresiva();

//ZONA DE FUNCIONES
function comenzarCuentaRegresiva() {
    cuentaRegresiva.textContent = 10;
    intervaloDeTiempo = setInterval(ticTac, 1000); 
}

function ticTac() {

    let tiempo = parseInt(cuentaRegresiva.textContent);
    cuentaRegresiva.textContent = --tiempo;
  
    if (tiempo === 0) {
        alert("tiempo terminado");
        tiempoCumplido();
    }
}

function tiempoCumplido() {
    clearInterval(intervaloDeTiempo);
    cuentaRegresiva.textContent = 0;
    audioFinal.play();
    alert("GEAME OVER: Se acabó el tiempo. Intenta nuevamente");
}

function finalizado() {
    clearInterval(intervaloDeTiempo);

    let fecha = new Date();
    mensaje = fecha.toLocaleDateString("es-Es") + "\n" +
                    "1. " + respuesta1.value + "\n" +
                    "2. " + respuesta2.value + "\n" +
                    "3. " + respuesta3.value + "\n" +
                    "4. " + respuesta4.value + "\n" +
                    "5. " + respuesta5.value+ "\n";

    
    controlErrores();
    alert(mensaje);
}   

function controlErrores(){
    arrayRespuestas = [];
    arrayRespuestas.push(respuesta1.value.trim());
    arrayRespuestas.push(respuesta2.value.trim());
    arrayRespuestas.push(respuesta3.value.trim());
    arrayRespuestas.push(respuesta4.value.trim());
    arrayRespuestas.push(respuesta5.value.trim());
     if (arrayRespuestas.includes("")) {
        mensaje += "tienes algún campo sin completar, por comentar...";
     }
}

function volverAIntentar() {
  //location.reload();

    clearInterval(intervaloDeTiempo);
    comenzarCuentaRegresiva();

    respuesta1.value = "";
    respuesta2.value = "";
    respuesta3.value = "";
    respuesta4.value = "";
    respuesta5.value = "";
    
}