document.addEventListener('DOMContentLoaded', function () {
  // ZONA DE VARIABLES
  const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
  const listaCarrito = document.getElementById('lista-carrito').getElementsByTagName('tbody')[0];
  const listaCursos = document.getElementById('lista-cursos');

  // Constante para cargar o inicializar el carrito desde el localStorage
  const carritoCursos = JSON.parse(localStorage.getItem('carrito')) || {};

  // Función para actualizar el estado de localStorage con el carrito actual
  function actualizarLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(carritoCursos));
  }

  // ZONA DE EVENTOS
  vaciarCarritoBtn.addEventListener('click', function () {
    // Vacia el carrito
    listaCarrito.innerHTML = '';
    // Reiniciar el carrito a 0
    Object.keys(carritoCursos).forEach(function (cursoId) {
      carritoCursos[cursoId] = 0;
      delete carritoCursos[cursoId]; // Eliminar un curso del carrito
    });
    // Actualizar el localStorage después de vaciar el carrito
    actualizarLocalStorage();
  });

  // Cargar cursos desde el localStorage al iniciar la página
  if (Object.keys(carritoCursos).length > 0) {
    Object.keys(carritoCursos).forEach(function (cursoId) {
      const curso = carritoCursos[cursoId];
      const nuevaFila = listaCarrito.insertRow(-1);
      nuevaFila.innerHTML = `
        <td><img src="${curso.imagen}" width="50"></td>
        <td>${curso.nombre}</td>
        <td>${curso.precio}</td>
        <td>${curso.cantidad}</td>
        <td><a href="#" class="borrar-curso" data-id="${cursoId}">X</a></td>
      `;
    });
  }

  // Carga del archivo JSON de cursos
  fetch('data/cursos.json')
    .then(response => response.json())
    .then(cursos => {
      // Recorrer los cursos y agregarlos al contenedor en filas de tres
      for (let i = 0; i < cursos.length; i += 3) {
        const fila = document.createElement('div');
        fila.className = 'row';

        for (let j = 0; j < 3 && i + j < cursos.length; j++) {
          const curso = cursos[i + j];
          const cursoHTML = `
            <div class="four columns">
              <div class="card">
                <img src="${curso.src}" class="imagen-curso u-full-width" />
                <div class="info-card">
                  <h4>${curso.titulo}</h4>
                  <p>${curso.autor}</p>
                  <img src="img/estrellas.png" />
                  <p class="precio">${curso.precioBajo} <span class="u-pull-right">${curso.precioAlto}</span></p>
                  <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="${curso.id}">Agregar Al Carrito</a>
                </div>
              </div>
            </div>
          `;
          fila.innerHTML += cursoHTML;
        }

        listaCursos.appendChild(fila);
      }
    })
    .catch(error => console.error('Error al cargar los cursos:', error))
    .finally(() => {
      // Agregar el evento click para el botón de agregar al carrito
      listaCursos.addEventListener('click', function (event) {
        if (event.target.classList.contains('agregar-carrito')) {
          agregarAlCarrito(event);
        }
      });
    });

  // ZONA DE FUNCIONES
  function agregarAlCarrito(event) { // Funcion para agregar al carrito
    event.preventDefault();

    const card = event.target.closest('.card');
    const cursoId = event.target.getAttribute('data-id');
    const imagenCurso = card.querySelector('.imagen-curso').src;
    const nombreCurso = card.querySelector('h4').textContent;
    const precioCurso = card.querySelector('.precio span').textContent;

    // Verificacion de si el curso ya está en el carrito
    if (carritoCursos[cursoId] === undefined) {
      carritoCursos[cursoId] = {
        imagen: imagenCurso,
        nombre: nombreCurso,
        precio: precioCurso,
        cantidad: 1,
      };
      // Crea una nueva fila en la lista del carrito si la cantidad es mayor que cero
      if (carritoCursos[cursoId].cantidad > 0) {
        const nuevaFila = listaCarrito.insertRow(-1);
        nuevaFila.innerHTML = `
          <td><img src="${imagenCurso}" width="50"></td>
          <td>${nombreCurso}</td>
          <td>${precioCurso}</td>
          <td>${carritoCursos[cursoId].cantidad}</td>
          <td><a href="#" class="borrar-curso" data-id="${cursoId}">X</a></td>
        `;
      }
    } else {
      // Si el curso ya está en el carrito se actualiza la cantidad
      carritoCursos[cursoId].cantidad++;
      // Encuentra la fila correspondiente y actualiza la cantidad
      const filaExistente = Array.from(listaCarrito.rows).find(row => row.cells[1] && row.cells[1].textContent === nombreCurso);

      if (filaExistente) {
        filaExistente.cells[3].textContent = carritoCursos[cursoId].cantidad;
      } else {
        // Si no se encuentra la fila se crea una nueva
        const nuevaFila = listaCarrito.insertRow(-1);
        nuevaFila.innerHTML = `
          <td><img src="${imagenCurso}" width="50"></td>
          <td>${nombreCurso}</td>
          <td>${precioCurso}</td>
          <td>${carritoCursos[cursoId].cantidad}</td>
          <td><a href="#" class="borrar-curso" data-id="${cursoId}">X</a></td>
        `;
      }
    }

    // Actualizar el localStorage después de agregar un curso al carrito
    actualizarLocalStorage();
  }

  // Eventos para el botón borrar Curso en el carrito
  listaCarrito.addEventListener('click', function (event) {
    if (event.target.classList.contains('borrar-curso')) {
      const cursoId = event.target.getAttribute('data-id');

      // Reducir la cantidad del curso y actualizar la fila
      carritoCursos[cursoId].cantidad--;
      // Buscar la fila correspondiente al curso en el carrito
      const filaExistente = Array.from(listaCarrito.rows).find(row => row.cells[4] && row.cells[4].firstElementChild.getAttribute('data-id') === cursoId);

      // Actualizar la cantidad y eliminar la fila si la cantidad llega a cero
      if (carritoCursos[cursoId].cantidad > 0) {
        filaExistente.cells[3].textContent = carritoCursos[cursoId].cantidad;
      } else {
        listaCarrito.removeChild(filaExistente);
        delete carritoCursos[cursoId];
      }

      // Actualizar el localStorage después de borrar un curso del carrito
      actualizarLocalStorage();
    }
  });
});
