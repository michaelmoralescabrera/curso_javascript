//funciones matematicas

//funcion de redondeo
var precio = Math.round(399.53);//Se redondea hacia arriba apartir de .5
document.writeln("El precio redondeado es: " + precio + "<br>");//funcion de redondeo hacia arriba
//funcion de redondeo hacia abajo porque es menor a .5
var precio2 = Math.round(399.43);//Se redondea hacia abajo
document.writeln("El precio redondeado es: " + precio2 + "<br>");//funcion de redondeo hacia abajo

//ceil redondea sin importar el decimal 
var precio = Math.ceil(299.4);//Se redondea hacia arriba 
document.writeln("El precio redondeado hacia arriba es: " + precio + "<br>");//funcion de redondeo hacia arriba

//floor redondea hacia abajo sin importar el decimal
var precio = Math.floor(540.9);//Se redondea hacia abajo
document.writeln("El precio redondeado hacia abajo es: " + precio + "<br>");//funcion de redondeo hacia abajo

//funcion para calcular el seno de un angulo
var seno = Math.sin(45);//Se calcula el seno de 45 grados
document.writeln("El seno de 45 grados es: " + seno + "<br>");

//calcular el exponencial de un numero
var expo = Math.exp(2);//Se calcula el exponencial de 2
document.writeln("El exponencial de 2 es: " + expo + "<br>");

//Calcula el logaritmo de un numero
var logaritmo = Math.log(10);//Se calcula el logaritmo de 10
document.writeln("El logaritmo de 10 es: " + logaritmo + "<br>");

//valor absoluto de un numero
var valorAbsoluto = Math.abs(-10);//Se calcula el valor absoluto de -50
document.writeln("El valor absoluto de -10 es: " + valorAbsoluto + "<br>");

//valor maximo de un conjunto de numeros
var maximo = Math.max(10, 20, 30, 40, 50);//Se calcula el valor maximo de un conjunto de numeros
document.writeln("El valor maximo de 10, 20, 30, 40, 50 es: " + maximo + "<br>");

//valor minimo de un conjunto de numeros
var minimo = Math.min(10, 20, 30, 40, 50);//Se calcula el valor minimo de un conjunto de numeros
document.writeln("El valor minimo de 10, 20, 30, 40, 50 es: " + minimo + "<br>");

//valor aleatorio entre 4 y 6
var aleatorio1 = Math.random(4,6);//Se genera un numero aleatorio entre 4 y 6
document.writeln("Un numero aleatorio entre el 4 y el 6 es: " + aleatorio1 + "<br>");

//valor aleatorio entre 0 y 10 combinando con Math round
var aleatorio2 = Math.round(Math.random()*10);//Se genera un numero aleatorio entre 0 y 10
document.writeln("Un numero aleatorio entre 5 y 6 es: " + aleatorio2 + "<br>");

//valor aleatorio 
var aleatorio3 = Math.random();
document.writeln("Un numero aleatorio es: " + aleatorio3 + "<br>");

//Raiz cuadrada de un numero
var Raiz = Math.sqrt(81);//Se calcula la raiz cuadrada de 81
document.writeln("La raiz cuadrada de 81 es: " + Raiz + "<br>");

//calcular el exponente de un numero
var exponente = Math.pow(4, 2);//Se calcula 4 elevado a la 2
document.writeln("4 elevado a la 2 es: " + exponente + "<br>");

//calcular el coseno de un angulo
var coseno = Math.cos(60);//Se calcula el coseno de 60 grados
document.writeln("El coseno de 60 grados es: " + coseno + "<br>");