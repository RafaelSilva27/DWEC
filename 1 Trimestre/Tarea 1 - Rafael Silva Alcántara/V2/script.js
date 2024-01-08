'use strict';

document.addEventListener("DOMContentLoaded", () => {

  //ZONA DE VARIABLES
  const destino = document.getElementById("destino");
  const precio = document.getElementById("precio");
  const btnPrecio = document.getElementById("btnPrecio");

  const baseDeDestinos = [
    { destino: "italia", precio: "300"},
    { destino: "alemania", precio: "400"},
    { destino: "argentina", precio: "800"}
  ];

  //ZONA DE EVENTOS
  btnPrecio.addEventListener("click", procesarPrecio);

  //ZONA DE FUNCIONES
  function procesarPrecio() { //FUNCION PARA CALCULAR EL PRECIO DEL DESTINO INGRESADO
    reset();
    let valor = destino.value.trim().toLowerCase();
    let precioCalculado = obtenerPrecio(valor);
    if (precioCalculado != null) {
      precio.textContent = precioCalculado;
    } else {
      precio.textContent = "Destino no encontrado";
    }
  }

  function reset() { //FUNCION PARA LIMPIAR EL CONTENIDO DEL PRECIO
    precio.textContent = "";
  }

  function obtenerPrecio(destino){ //FUNCION PARA DEVOLVER EL PRECIO CORRESPONDIENTE A CADA DESTINO
    const resultado = baseDeDestinos.find(item => item.destino == destino);
    return resultado ? resultado.precio : null;
  }

});