const listaEstudiantes = [
  { nombre: "Rafael", nota: [5, 8.5, 4.5, 9, 7, 7, 6, 6.5, 8, 4] }
];

let notas = [];

document.addEventListener("DOMContentLoaded", () => {
  // Ocultar la lista de notas al inicio
  document.getElementById("notasContainer").style.display = "none";
});

function cargarNotas() {
  notas = listaEstudiantes.map(alumno => ({ nombre: alumno.nombre, nota: [...alumno.nota] }));
  mostrarNotas();
  habilitarDeshabilitarBotones(true);
}

function borrarNotas() {
  notas = [];
  mostrarNotas();
  habilitarDeshabilitarBotones(false);
}

function mostrarNotas() {
  const notasContainer = document.getElementById("notasContainer");
  const listaNotas = document.getElementById("listaNotas");

  listaNotas.innerHTML = "";

  notas.forEach((alumno) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${alumno.nombre}: ${alumno.nota.join(', ')}`;
    listaNotas.appendChild(listItem);
  });

  // Mostrar el contenedor de notas después de cargar las notas
  notasContainer.style.display = "block";
}

function calcularPromedio() {
  const promedioSpan = document.getElementById("promedioCalculo");
  const promedioResultado = document.getElementById("promedio");

  const suma = notas[0].nota.reduce((acumulador, nota) => acumulador + nota, 0);
  const promedio = suma / notas[0].nota.length;
  promedioSpan.textContent = promedio.toFixed(2);
  promedioResultado.style.display = "block";
}

function calcularNotaMasAlta() {
  const notaMasAltaSpan = document.getElementById("NotaMasAlta");
  const notaMasAltaResultado = document.getElementById("NotaAlta");

  const notaMasAlta = Math.max(...notas[0].nota);
  notaMasAltaSpan.textContent = notaMasAlta;
}

function verificarSuspenso() {
  const haySuspensoSpan = document.getElementById("haySuspenso");
  const suspensoResultado = document.getElementById("suspensoResultado");

  const haySuspenso = notas[0].nota.some(nota => nota < 5);
  haySuspensoSpan.textContent = haySuspenso ? "Sí" : "No";
}

function habilitarDeshabilitarBotones(habilitar) {
  const calcularPromedioBtn = document.getElementById("calcularPromedioBtn");
  const calcularNotaMasAltaBtn = document.getElementById("calcularNotaMasAltaBtn");
  const verificarSuspensoBtn = document.getElementById("verificarSuspensoBtn");

  calcularPromedioBtn.disabled = !habilitar;
  calcularNotaMasAltaBtn.disabled = !habilitar;
  verificarSuspensoBtn.disabled = !habilitar;

  [calcularPromedioBtn, calcularNotaMasAltaBtn, verificarSuspensoBtn].forEach(btn => {
    if (habilitar) {
      btn.classList.remove("opacity-50");
    } else {
      btn.classList.add("opacity-50");
    }
  });
}
