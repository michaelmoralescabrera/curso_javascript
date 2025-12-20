//Set Time Out
/*
function comenzarTiempo(){
    //5000 son 5 segundos ya que esta en milisegundos, es el tiempo en el que se va a ejecutar la acción
   setTimeout(tiempocumplido, 5000);
}
//despues de los 5 segundos entra la siguiente funcion
function tiempocumplido(){
    alert('Se termino el tiempo');
}
*/




//otro ejemplo
//Se recomuenda colocar las variables dentro de cada funcion donde se vallan a usar

function comenzarTiempo(){
    //Siempre que se trabaja con getElementById se debe colocar value, cuando el usuario ingresa datos
//tiempoelejido es el id que se le puso al text number en html
let elementosegundos = document.getElementById("tiempo").value;
//a diferencia del ejemplo anterior en lugar de los 5000 se coloca el nombre de la variable,
    //  el cual trae el valor que el usuario ingreso, pero el valor que ingresa el usuario que esta en la variable se 
    // debe multiplicar * 1000 para que pase a milisegundos
    setTimeout(tiempocumplido, 1000*elementosegundos);

}
//despues de los 5 segundos entra la siguiente funcion
function tiempocumplido(){
    //no se le coloca el value ya que el usuario no va a ingresar datos en esta variable
let elementotextoalarma = document.getElementById("textoalarma");
    elementotextoalarma.textContent = "ENCENDIDO";
    elementotextoalarma.style.color = "green";
}
   
  

