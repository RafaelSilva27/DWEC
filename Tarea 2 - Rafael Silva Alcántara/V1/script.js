const listaEstudiantes = [
  { nombre: "Rafael", nota: [5, 8.5, 4.5, 9, 7, 7, 6, 6.5, 8, 4] }
];

let notas = [];

document.addEventListener("DOMContentLoaded", () => {
  generarNotas();
});

function generarNotas() {
  notas = listaEstudiantes.map(alumno => ({ nombre: alumno.nombre, nota: [...alumno.nota] }));
  mostrarNotas();
}

function mostrarNotas() {
  const listaNotas = document.getElementById("listaNotas");
  listaNotas.innerHTML = "";

  notas.forEach((alumno) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${alumno.nombre}: ${alumno.nota.join(', ')}`;
    listaNotas.appendChild(listItem);
  });
}

function calcularPromedio() {
  const promedioSpan = document.getElementById("promedioCalculo");
  const promedioResultado = document.getElementById("promedio");

  const suma = notas[0].nota.reduce((acumulador, nota) => acumulador + nota, 0);
  const promedio = suma / notas[0].nota.length;
  promedioSpan.textContent = promedio.toFixed(2);
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


