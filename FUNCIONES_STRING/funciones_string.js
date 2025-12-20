//FUNCIONES STRING

//las funciones String son métodos que nos permiten manipular cadenas de texto

let texto = 'JavaScript';
document.writeln('La palabra es: ' + texto + '<br>');

//longitud de un texto
document.writeln('La longitud de la palabra es: ' + texto.length + '<br>');

//Ver cantidad de caracteres
document.writeln('La cantidad de caracteres es: ' + texto.length + '<br>');

//ver cantidad específica de caracteres desde la letra 0 a la 4
document.writeln('Primeras 4 letras: ' , texto.slice(0,4) , '<br>');


//ver cantidad específica de caracteres desde la letra 2 a la 5
document.writeln('Primeras 4 letras: ' , texto.slice(2,5) , '<br>');


//ver cantidad específica de caracteres utilizando el método substring
document.writeln('Primeras 4 letras: ' , texto.substring(0,4) , '<br>');

//cambbiar valores en un texto, en este caso cambia el hola por el adios 
let saludos = 'Hola a todos';
saludos = saludos.replace('Hola', 'adios');
document.writeln(saludos + '<br>');

//poner en mayusculas
document.writeln('En mayusculas: ' + texto.toUpperCase() + '<br>');

//poner en minusculas
document.writeln('En minusculas: ' + texto.toLowerCase() + '<br>');

//unir texttos
let texto2 = 'Curso de ';
document.writeln('Unir textos: ' + texto2.concat(texto) + '<br>');

//acortar espacios entre textos
let texto3 = '   Hola   ';
document.writeln(texto3 + '<br>');
document.writeln(texto3.trimStart() + '<br>');//quita los espacios del lado izquierdo
document.writeln(texto3.trimEnd() + '<br>');//quita los espacios del lado derecho
document.writeln(texto3.trim() + '<br>');//quita los espacios de ambos lados

//cortarr cantidad de caracteres
document.writeln(texto.split('Java') + '<br>');//corta el texto en la letra Java y muestra solo Script

//cortarr cantidad de caracteres
document.writeln(texto.split('Script') + '<br>');//corta el texto en la letra Script y muestra solo Java

