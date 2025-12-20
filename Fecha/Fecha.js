
//Recomuenda colocar las variables dentro de cada funcion donde se vallan a usar
function comenzarTiempo(){
    //Siempre que se trabaja con getElementById se debe colocar value, cuando el usuario ingresa datos
//tiempoelejido es el id que se le puso al text number en html
let elementosegundos = document.getElementById("tiempo").value;
//a diferencia del ejemplo anterior en lugar de los 5000 se coloca el nombre de la variable,
    //  el cual trae el valor que el usuario ingreso, pero el valor que ingresa el usuario que esta en la variable se 
    // debe multiplicar * 1000 para que pase a milisegundos
    setTimeout(tiempocumplido, 1000*elementosegundos);

}

function tiempocumplido(){

//se agrega una variable que va a contener el sonido, se coloca en parentesis el ID del elemento audio que esta en html
let elementosonidoalarma = document.getElementById("audioalarma");
let elementocoloralarma = document.getElementById("textoalarma");
  
    elementocoloralarma.style.color = 'green';
    //Ejecutara el sonido cuando se cumpla la accion
    elementosonidoalarma.play();

}

//Se programa el reloj

function comenzarReloj(){
    //setInterval llama a una funcion cada vez que se cumpla un determinado tiempo
    setInterval(tictac, 1000);//1000 milisegundos equivale a un segunod
}
function tictac(){
//no se le coloca el value ya que el usuario no va a ingresar datos en esta variable
let elementotextoalarma = document.getElementById("textoalarma");
let tiempoactual = new Date();//se crea el objeto Date
let hora = String(tiempoactual.getHours()).padStart(2, "0");
let minutos = String(tiempoactual.getMinutes()).padStart(2, "0");
let segundos = String(tiempoactual.getSeconds()).padStart(2, "0");//Se le coloca String y padStart establece que tan largo debe ser un elemento en este caso dice que debe ser de dos elementos iniciando con 0
let textoHora = hora + ':' + minutos + ':' + segundos;
elementotextoalarma.textContent = textoHora;


}

