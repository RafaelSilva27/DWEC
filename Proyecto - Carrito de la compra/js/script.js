document.addEventListener("DOMContentLoaded", function () {
  // Variables para elementos del DOM
  const vaciarCarritoBtn = document.getElementById("vaciar-carrito");
  const listaCarrito = document.getElementById("lista-carrito").getElementsByTagName("tbody")[0];

  // Objeto para almacenar la cantidad de cada curso en el carrito
  const carritoCursos = {};

  // Manejador de eventos para el botón de vaciar carrito
  vaciarCarritoBtn.addEventListener("click", function () {
    // Lógica para vaciar el carrito
    listaCarrito.innerHTML = "";
    // Reiniciar el objeto que almacena la cantidad de cursos
    Object.keys(carritoCursos).forEach(function (cursoId) {
      carritoCursos[cursoId] = 0;
    });
  });

  // Manejador de eventos para los botones "Agregar Al Carrito"
  const agregarAlCarritoBtns = document.getElementsByClassName("agregar-carrito");

  for (let i = 0; i < agregarAlCarritoBtns.length; i++) {
    agregarAlCarritoBtns[i].addEventListener("click", function (event) {
      event.preventDefault();

      // Obtén la información del curso desde el elemento correspondiente
      const card = event.target.closest(".card");
      const cursoId = agregarAlCarritoBtns[i].getAttribute("data-id");
      const imagenCurso = card.querySelector(".imagen-curso").src;
      const nombreCurso = card.querySelector("h4").textContent;
      const precioCurso = card.querySelector(".precio span").textContent;

      // Verificar si el curso ya está en el carrito
      if (carritoCursos[cursoId] === undefined) {
        carritoCursos[cursoId] = 1;
        // Crea una nueva fila en la lista del carrito
        const nuevaFila = listaCarrito.insertRow(-1);
        nuevaFila.innerHTML = `
          <td><img src="${imagenCurso}" width="50"></td>
          <td>${nombreCurso}</td>
          <td>${precioCurso}</td>
          <td>${carritoCursos[cursoId]}</td>
          <td><a href="#" class="borrar-curso" data-id="${cursoId}">X</a></td>
        `;
      } else {
        // Si el curso ya está en el carrito, actualiza la cantidad
        carritoCursos[cursoId]++;
        // Encuentra la fila correspondiente y actualiza la cantidad
        const filaExistente = Array.from(listaCarrito.rows).find(row => row.cells[1].textContent === nombreCurso);
        filaExistente.cells[3].textContent = carritoCursos[cursoId];
      }
    });
  }

  listaCarrito.addEventListener("click", function (event) { 
    if (event.target.classList.contains("borrar-curso")) {
      const cursoId = event.target.getAttribute("data-id");

      // Reducir la cantidad del curso y actualizar la fila
      carritoCursos[cursoId]--;
      const filaExistente = Array.from(listaCarrito.rows).find(row => row.cells[4].firstElementChild.getAttribute("data-id") === cursoId);

      // Actualizar la cantidad y eliminar la fila si la cantidad llega a cero
      if (carritoCursos[cursoId] > 0) {
        filaExistente.cells[3].textContent = carritoCursos[cursoId];
      } else {
        listaCarrito.removeChild(filaExistente);
        delete carritoCursos[cursoId];
      }
    }
  });
});
