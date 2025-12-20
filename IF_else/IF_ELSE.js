//Condicional IF-ELSE


//Ejemplo 1
/*let nombre;
let edad;

nombre = prompt('Ingrese su nombre:');
edad = prompt('Ingrese su edad');


if (edad >= 18) {
    document.writeln('Hola ' + nombre + ', eres mayor de edad.');
} else {
    document.writeln('Hola ' + nombre + ', eres menor de edad.');
} */

//Ejemplo 2

let nombre2;
let edad2;


nombre2 = prompt('Ingrese su nombre:');
edad2 = prompt('Ingrese su edad:');
edad2 = parseInt(edad2);//Convertir a entero


if(edad2 >= 18){
    document.writeln('Hola ' + nombre2 + ', eres mayor de edad.');
}else{ 
    if(edad2 < 18){
        document.writeln('Hola ' + nombre2 + ', eres menor de edad.');
    }
    else{
        document.writeln('No has ingresado un dato valido');
    }
    }
