//Este recorre los valores de estructuras iterables como arrays, strings, sets, etc.


//Ejemplo 1

const numeros = [2,4,6,8];
let suma = 0;

for(let numero of numeros){
    suma += numero;

}

document.writeln(suma);



//Ejemplo 2 que hace lo mismo pero con diferente estructura

const numeros1 = [2,4,6,8];
let suma1 = 0;

for(let numero1 of numeros1){
    suma1 = suma1 + numero1;

}

document.writeln(suma1);

