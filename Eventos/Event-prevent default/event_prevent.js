/*El DOM (Modelo de Objetos del Documento) es como un mapa que el navegador crea del HTML de tu página. 
Imagina que el HTML es una maqueta de una casa, y el DOM es el plano que te permite mover cosas, cambiar colores, 
agregar muebles… ¡todo desde JavaScript!
¿Para qué sirve?
Con el DOM puedes usar JavaScript para:
- Leer lo que hay en la página.
- Cambiar textos, imágenes, colores, etc.
- Agregar o quitar elementos.
- Detectar eventos como clics, teclas, etc.
*/


//Event - Event Defaault
/*
Qué es event.target en JavaScript?
Cuando ocurre un evento (como un clic), JavaScript crea un objeto de evento que contiene información sobre lo que pasó.
Dentro de ese objeto, event.target te dice exactamente qué elemento fue el que disparó el evento.
*/

/*
¿Qué es event.currentTarget en JavaScript?
Cuando ocurre un evento (como un clic), JavaScript te da acceso a dos cosas:
- event.target: el elemento exacto donde ocurrió el evento.
- event.currentTarget: el elemento que tiene el addEventListener, o sea, el que está escuchando el evento.

en este caso te dice con event.target que fue en el boton y con event.currentTarget que esta asocuado a un div de HTML
 */


/* ¿Qué hace event.preventDefault()?
Este método evita el comportamiento automático que tiene un elemento cuando ocurre un evento.
Es como decirle al navegador:
“¡Ey! No hagas lo que normalmente harías, yo me encargo.”

 */


let boton = document.getElementById('boton1');
let div1 = document.getElementById('div1');
let enlace = document.getElementById('enlace1')

function bloqueo_enlace(Event){
    Event.preventDefault();
    alert('Enlace Bloqueado');
}

function mostrarmensaje(Event){
    alert(Event.target);
    alert(Event.currentTarget);
}
div1.addEventListener('click', mostrarmensaje);
enlace.addEventListener('click', bloqueo_enlace);
