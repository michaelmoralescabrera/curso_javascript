//ARRAYS (Arreglos) 

//Los Arreglos son una estructura de datos que permite almacenar múltiples valores en una sola variable.

//Declaración de un arreglo
let numeros = [10, 20, 30, 40, 50];
document.writeln('Elementos: ' + numeros + "<br>");
document.writeln('Primer elemento: ' + numeros[0] + "<br>");
document.writeln('Tipo de dato: ' + typeof numeros + "<br>");
document.writeln('¿Es un arreglo?: ' + Array.isArray(numeros) + "<br>");



//arrglo con letras
let frutas = ['manzanas', 'fresas', 'naranjas', 'mangos'];
document.writeln('Elementos: ' + frutas + "<br>");




//METODOS DE LOS ARREGLOS

//Modificar un elemento del arreglo
numeros[2] = 35; // Cambia el tercer elemento (índice 2) a 35
document.writeln('Arreglo modificado: ' + numeros + "<br>");

//ordema un arrglo de letras alfabeticamente
document.writeln('Arreglo de frutas ordenado: ' + frutas.sort() + "<br>");

//cantidad de elementos
document.writeln('Tamaño del arreglo: ' + numeros.length + "<br>");
document.writeln('Último elemento: ' + numeros[numeros.length - 1] + "<br>");

//cambiar de numero a string
document.writeln('Número a String: ' + numeros.toString() + "<br>");

//unir dos arreglos
let letras = ['a', 'b', 'c', 'd'];
let numeros2 = [1, 2, 3, 4];
document.writeln('Unir dos arreglos: ' + letras.concat(numeros2) + "<br>");

//agregar un elemento al final del arreglo
numeros.push(60);
document.writeln('Agregar al final: ' + numeros + "<br>");

//eliminar el último elemento del arreglo
numeros.pop();
document.writeln('Eliminar último elemento: ' + numeros + "<br>");

//agregar un elemento al inicio del arreglo
numeros.unshift(5);
document.writeln('Agregar al inicio: ' + numeros + "<br>");

//eliminar el primer elemento del arreglo
numeros.shift();
document.writeln('Eliminar primer elemento: ' + numeros + "<br>");

//ordenar los elementos del arreglo
document.writeln('Arreglo ordenado: ' + numeros.sort() + "<br>");

//invertir el orden de los elementos del arreglo
document.writeln('Arreglo invertido: ' + numeros.reverse() + "<br>");

//buscar un elemento en el arreglo
let indice = numeros.indexOf(10);
document.writeln('Índice del elemento 10: ' + indice + "<br>");

//eliminar elemento a partir de un punto
numeros.splice(2, 1); // Elimina 1 elemento a partir del índice 2, el numero 1 idica cuantos elementos eliminar
document.writeln('Eliminar elemento en índice 2: ' + numeros + "<br>");

//copiar un arreglo
let camtidades = [100, 200, 300, 500, 600];
let copia = camtidades.slice(); //Copia todo el arreglo
document.writeln('Copia del arreglo: ' + copia + "<br>");

//copiar parte de un arreglo
let camtidades2 = [100, 200, 300, 500, 600];
let parte = camtidades2.slice(1, 4); //Copia desde el índice 1 hasta el índice 4 (no incluye el índice 4)
document.writeln('Parte del arreglo: ' + parte + "<br>");

//convertir un string a un arreglo
let texto = "Hola, bienvenido al curso de JavaScript";
let arregloTexto = texto.split(" "); // Divide el string en un arreglo usando el espacio como separador
document.writeln('String a arreglo: ' + arregloTexto + "<br>");

