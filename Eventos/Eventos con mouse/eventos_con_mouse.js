//Los eventos en JavaScript son acciones o sucesos que ocurren en el navegador y 
// que pueden ser detectados y respondidos por tu código. Son fundamentales para crear páginas web interactivas.

/*  ¿Qué es addEventListener?
Es una función que se usa para decirle a JavaScript:
"Oye, cuando pase algo en este elemento, ejecuta esta acción."
Ese “algo” puede ser un clic, una tecla presionada, mover el mouse, enviar un formulario, etc.

En los ejemplos se utilizan dos tipos de eventos con el mouse, uno es clic y otro es mouseover
 */

//ejemplo 1
/*
let boton = document.getElementById('boton1');

boton.addEventListener('click', function(){
    alert('Presionaste el boton')
} );
*/


//Ejemplo 2
/*
let boton = document.getElementById('boton1');

function muestramensaje(){
alert("Boton precionado");

}
boton.addEventListener('click', muestramensaje);
*/


//Ejemplo 3

//mouseover en JavaScript es un tipo de evento que ocurre cuando el cursor del mouse pasa por encima de un elemento en la página web, sin hacer clic.


let boton = document.getElementById('boton1');

function mensaje2(){
alert("soy un mouseover");

}
boton.addEventListener('mouseover', mensaje2);
