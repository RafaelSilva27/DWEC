function saludar() {
  let nombreusuario = document.getElementById("nombreusuario").value;

  let salida = document.getElementById("salida");

  if (isEmpty(nombreusuario)) {
    alert("has de introducir algo");
  } else {
    saludando(nombreusuario,salida);
  }
}

function isEmpty(user) {
  if (user == ""){
    return true;
  } else return false;
  
}

function saludando(user,sal) {
  let mensaje = `hola ${user}`
  alert(mensaje);
  sal.textContent = mensaje;
}