//WHILE

//while es una estructura de control que se repite mientras una condicion sea verdadera

/*let f =1;

while (f<10) {

    document.writeln('vuelta no.', f, '<br>');
    f++;

    //f = f + 1; //otra forma de incrementar el valor de f
}

document.writeln('fin del bucle while', '<br>', '<br>');

//while en decremento
let g = 10;
while (g>=0){
    document.writeln('vuelta no.', g, '<br>');
    g--;
    //g = g - 1; //otra forma de decrementar el valor de g
}
document.writeln('fin del bucle while', '<br>');*/


//otra forma de usar while es para sumar un numero de veces que el usuario quiera
//en este caso se le pide al usuario que ingrese un numero y se suman los 
//valores ingresados hasta que se cumpla la condicion de que el numero de veces sea 5
let f =1;
let suma = 0;
let valor;

while (f<=5) {
    valor = parseInt(prompt('ingresa un numero'));
    suma = suma + valor;
    f++;
}
document.writeln('el resultado de la suma es: ', suma, '<br>');




