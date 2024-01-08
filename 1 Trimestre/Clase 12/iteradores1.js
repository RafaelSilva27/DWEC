const carrito = [
  {nombre: 'TV', precio: 500},
  {nombre: 'lavadora', precio: 600},
  {nombre: 'reloj', precio: 1000},
  {nombre: 'yoquese', precio: 300},
]

console.table(carrito);
mostrarcarrito_for();
//mostrarcarrito_while();
//mostrarcarrito_dowhile();


function mostrarcarrito_for() {
  for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);
  }
}

/*function mostrarcarrito_while() {
  let i = 0;
  while (carrito.length > 0) {
    console.log(carrito[i].nombre);
  }
}*/
