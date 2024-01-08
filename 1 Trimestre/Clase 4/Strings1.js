//3 formas de declarar un String
let producto1 = "Monitor 20 pulgadas";
let producto2 = String("Monitor 24 pulgadas");
let producto3 = new String("Monitor de 24 pulgadas");

console.log(producto1);
console.log(producto2);
console.log(producto3);

//Ahora vamos a ver una de las utildades de usar comillas simples 
producto1 = 'Monitor 20" ';
console.log(producto1);

//Ahora vamos a ver una forma de usar un doble comillas dentro de otro doble comillas, con el escape
producto1 = "Monitor 20\" ";
console.log(producto1);

