const contenido = document.querySelector(".contenido");

localStorage.removeItem("nombreClave");
localStorage.clear();
escribirLS();


function escribirLS() {
  const nombreProfesor = "rocio";
  localStorage.setItem("nombre", nombreProfesor);

  const meses = ["enero", "febrero", "marzo"];
  localStorage.setItem("meses", JSON.stringify(meses));

  const alumno = {
    nombre: "rafa",
    ciclo: "DAW"
  }

  localStorage.setItem("objeto alumno", JSON.stringify(alumno));
}

function getLS() {
  const nombreProfesor = localStorage.getItem("nombre");
  const meses = JSON.parse(localStorage.getItem("meses"));
  const alumno = JSON.parse(localStorage.getItem("objeto alumno"));
  const texto = document.createElement("p");
  texto.innerHTML = `
      nombreProfesor: ${nombreProfesor}
      meses: ${meses.join("|")}
      alumno: ${alumno.nombre} ${alumno.ciclo}
  `;
  contenido.appendChild(texto);

}
