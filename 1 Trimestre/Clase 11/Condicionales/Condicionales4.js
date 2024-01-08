const btn = document.querySelector("#btnPrecio");
const inputMarca = document.querySelector("#marca");
const salidaPrecio = document.querySelector("#precio");


btnPrecio.addEventListener("click", () => {
  calcularPrecio();
});

function calcularPrecio() {
  let salida = "";
  if (todo_ok()){
    let entradaDatos = String(inputMarca.value);
    switch (entradaDatos) {
      case ("PEUGEOT 207"):
        salida = "El precio es 15000";
        break;
      case ("CITROEN C4"):
        salida = "El precio es de 20000";
        break;
      default:
        salida ="El coche insertado no esta en la base de datos";
    }
  } else {
    console.log("No ha pasado el control de errores");
    salida = "Cadena vacia";
  }
  escribirDOM(salidaPrecio, mensaje);
}

function escribirDOM(componente, msg) {
  componente.textContent = msg;
}

function todo_ok() {
  if (inputMarca.trim().length() === 0) {
    return false;
  } else {
    return true;
  }
}
