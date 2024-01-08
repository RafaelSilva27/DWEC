'use strict';

let numero = 11;
let string1 = "hola mundo mundo";
let string2 = "Hola que tal";

//conversion y consultas de tipo
console.log(numero.toString());
console.log(typeof(numero));
console.log(typeof(numero.toString()));

//conversiones a mayus/minus
console.log(string1.toUpperCase());
console.log(string2.toLowerCase());

//calcular longitud
console.log(string1.length);

//concatenar
console.log(string1.concat(" aqui estoy"));

//metodos de busqueda que devuelven la posicion indexOf === search
console.log(string1.indexOf("mundo"));
console.log(string1.indexOf("kk"));
console.log(string1.search("und"));
console.log(string1.search("kk"));
console.log(string1.lastIndexOf("mundo"));

//metodos de busqueda que devuelve un array con las coincidencias
console.log(string1.match(/mundo/g));

//metodo de busqueda substring
let string3 = "hola que tal va por alli"
console.log("metodo substring: " + string3.substring(1,6));
console.log(string3.charAt(1));
console.log(string3.substring(1,2));
console.log(string3.slice(1,2));

//metodo include
console.log(string3.includes("tal"));
console.log(string3.includes("kk"));
console.log(string3.startsWith("ho"));
console.log(string3.startsWith("kk"));
console.log(string3.endsWith("alli"));
console.log(string3.endsWith("kk"));

//metodos de reemplazo
console.log(string3.replace("hola"), ("adios"));

//metodo 
let correo = "  correo@gamil.com  ";
console.log(correo.length);
console.log(correo.trim().length);

//metodo de cpnversion de arrray cuando hay un limitador comun
let var1 = "hola que tal alli";
let var2 = "18-45-56-67-78-89";
console.log(var1.split(" "));
console.log(var2.split("-"));
let array_numeros = var2.split("-");
console.log(array_numeros[2]);


