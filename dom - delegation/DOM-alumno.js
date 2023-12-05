const contenedorCardsDestinos = document.querySelector("section.destinos .contenedor-cards");
const contenedorCardsHospedaje = document.querySelector("section.hospedaje .contenedor-cards");
const componenteCardsHospedaje = document.querySelectorAll("section.hospedaje .contenedor-cards .card");
const contenedorCardsHacer = document.querySelectorAll("section.hacer .contenedor-cards");

//CASO 0 - GETATTRIBUTE: vas a leer el id y el img-id de la primera imagen de la primera card de destinos populares
console.log(contenedorCardsDestinos.children[0].children[0].id);
console.log(contenedorCardsDestinos.children[0].children[0].getAttribute("img-id"));


//CASO 1 - CARDS DE DESTINO - EVENTO EN LA IMAGEN - MUESTRO SU URL): ADDEVENTLISTENER LISTENER + ARRAOW FUNCTION DENTRO
//vas a poner un evento en las imágenes de las cards de destinos populares
//de tal forma que cada vez que se haga un click en las imágenes, que muestre en un alert su url

//Has de hacer uso de addeventlistener + arrow function dentro
//imprime toda la información del evento
contenedorCardsDestinos.addEventListener("click", (elemento) => {
  console.log("entendiendo el e del evento: " + elemento.type + " " + elemento.buttons);
  console.log(elemento.clientX + " " + elemento.clientY);
  console.log(elemento.layerX + " " + elemento.layerY);
  console.log(elemento.target);

  if (elemento.target.classList.contains("imagen")) {
    funcionImagen();
  }

  if (elemento.target.classList.contains("boton")) {
    funcionBoton();
    alert(elemento.target.src);
  }
})



//CASO 2 (CARDS DE DESTINO - EVENTO EN EL PARRAFO TITULO - MUESTRO SU TEXTCONTENT): ADDEVENT LISTENER + ARROW FUNCTION DENTRO + FUNCION DENTRO
//Vas a poner un evento en los títulos de las cards de destinos h2DestinosPopulares
//de tal forma que cada vez que haga un click en el título, pues que muestre todo el componente html

//Has de hacer uso de addeventlistener + arrow function dentro
//Dentro de la arrow function llama a una función que ejecute esa tarea
contenedorCardsDestinos.addEventListener("click", (elemento) =>{
  if (elemento.target.classList.contains("titulo")) {
    printTextContent(elemento.target);
  }
})



//CASO 3 (CARDS DE QUE HACER EN NY - EVENTO ENE EL PARRAFO TITULO - MUESTRO SU TEXTCONTENT): ADDEVENT LISTENER + FUNCION
//Vas a poner un evento en los títulos de los cards de que hacer en queHacerNY
//de tal forma que cada vez que se haga un click en el título, ha de mostrar en un alert todo el componente HTML

//Has de hacer uso de addevent listenr  y funciones, no arrow functions

const h2DestinosPopulares = querySelectorIncludesText("h2", "Que hacer en New York");
function querySelectorIncludesText (selector, text) {
  return Array.from(document.querySelectorAll(selector))
    .find(el => el.textContent.includes(text));
}
const queHacerNY2 = h2DestinosPopulares.nextElementSibling;
console.log("queHacerNY2: " + queHacerNY2);

const queHacerNY = contenedorCardsHacer[2];
console.log("queHacerNY: " + queHacerNY);

queHacerNY.addEventListener("click", queHacerNuevaYork);

function queHacerNuevaYork(elemento) {
  if (elemento.target.classList.contains("titulo")) {
    printTextContent(elemento.target);
  }
}

function printTextContent(componente) {
  alert(componente.textContent);
}


//CASO 4 TRAVERSING THE DOM
//Cards de hospedaje a través de su padre
let  listadoCardsHospedajePadre = Array.from(contenedorCardsHospedaje.children);
console.log(listadoCardsHospedajePadre);

//Cards de hospedaje a traves de los hijos
let listadoCardsHospedajeHijos = Array.from(componenteCardsHospedaje);
console.log(listadoCardsHospedajeHijos);

//Con foreach: Recorrerlos e imprimir url y textcontent
listadoCardsHospedajePadre.forEach((elto) => {
  console.log(elto.children[0].src);
  let arrayHospedajes = Array.from(elto.children[1].children);
  arrayHospedajes.forEach((elto) => console.log(elto.textContent));
});

//Con for in
for (let pos in listadoCardsHospedajePadre) {
  let elto = listadoCardsHospedajePadre[pos];
  console.log(elto.children[0].src);
  let arrayHospedajes = Array.from(elto.children[1].children);
  arrayHospedajes.forEach((elto) => console.log(elto.textContent));
}

//Con foreach
for (let card of listadoCardsHospedajePadre) {
  let elto = card;
  console.log(elto.children[0].src);
  let arrayHospedajes = Array.from(elto.children[1].children);
  arrayHospedajes.forEach((elto) => console.log(elto.textContent));
}


//CASO 5- BORRADO EFICIENTE DE UN SUBÁRBOL
//Borra de forma eficiente todos los divs contenidos en la sección de que hacer en NY
resetTabla(queHacerNY);

function resetTabla(nodo) {
  while(nodo.firstChild) {
    nodo.removeChild(nodo.firstChild);
  }
}


//CASO 6- CUANDO PULSE EN EL PRECIO DE HOSPEDAJE PUES QUE SAQUE:
//LA URL DE LA IMAGEN DE SU CONTENEDOR
//EL NOMBRE DEL CONTENEDOR PADRE
contenedorCardsHospedaje.addEventListener("click", (e) => {
  if (e.target.classList.contains("precio")) {
    let nodo_precio = e.target;
    let nodo_imagen = e.target.parentElement.children[0];
    alert("source img: " + nodo_imagen.src);
  }
});

