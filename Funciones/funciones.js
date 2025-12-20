//funciones

//funciones son bloques de codigos que realizan tareas especificas, 
// pueden ser reutilizadas en diferentes partes de nuestros programas, ayudan a modular el codigo

//Funciones Declarativas

/*function saludas(){
    document.writeln('Hola a todos');

    //alert('hola a todos'); //alert manda un mensaje en una ventana pequeña 

}
saludas();
document.writeln('<br>')
saludas();//al colocar varias veces saludas el mensaje se muestra las veces que sean necesarias
//a esto se refiere cuando se dice que son reutiliables
*/

//con dos funciones
/*function saludas(){
    document.writeln('Hola a todos');
}

function despedirse(){
document.writeln('adios a todos');

}
despedirse();
document.writeln('<br>');
saludas();
*/

//funcion dentro de otra funcion, la funcion desperdirse esta dentro de la 
// de saludar y el resultado es el mismo

/*
function saludas(){
    document.writeln('Hola a todos');
    document.writeln('<br>');
    despedirse();
}

function despedirse(){
document.writeln('adios a todos');

}
saludas();

*/

//variables en funciones

function saludar(){
let saludo = prompt('Ingrese un saludo');
alert(saludo);

}
saludar();