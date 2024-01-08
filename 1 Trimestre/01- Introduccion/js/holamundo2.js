function saludo2() {
  let mivariable = prompt("Cual es tu nombre?");
  //alert("hola: " + mivariable);
  //alert(`hola: ${mivariable}`);
  document.querySelector('.contenido').innerHTML = ` Buenos dias ${mivariable}`;
}
