/*¿Qué hacen mouseover, mouseout y mousemove?
 mouseover
- Se activa cuando el cursor entra en un elemento.
- Ideal para cambiar estilos o mostrar información cuando el usuario pasa el mouse por encima.
- Ejemplo: resaltar un botón al pasar el mouse.

 mouseout
- Se activa cuando el cursor sale del elemento.
- Se usa para revertir cambios hechos con mouseover.
- Ejemplo: quitar el resaltado cuando el mouse se va.

mousemove
- Se activa cada vez que el mouse se mueve dentro del elemento.
- Útil para seguir el cursor, mostrar coordenadas, o crear efectos dinámicos.
- Ejemplo: mostrar la posición del mouse en tiempo real.

*/

/*
//Ejemplo 1 con click

let menu = document.getElementById('mimenu');
let boton = document.getElementById('miboton');

boton.addEventListener('click', function(){
    menu.style.display = 'block'; //'block': cambia esa propiedad para que el elemento se muestre como un bloque en la página.


})
*/


let menu = document.getElementById('mimenu');
let boton = document.getElementById('miboton');

//cuando el mouse pasa por encima del boton se muestra el menu sin hacer click
    boton.addEventListener('mouseover', function(){
    menu.style.display = 'block';

})

//Cuando el mouse se retira del boton el menu se oculta nuevamente sin hacer clic en el boton
 boton.addEventListener('mouseout', function(){
 menu.style.display = 'none';
 })

 //se coloca document.addEventListener porque el evento se generara en toda la pagina
 //cuando el mouse se mueve dentro de la pagina nos va a traer por consola las coordenadas x e y de nuestro mouse

 document.addEventListener('mousemove', function(event){
 console.log('Posición X: '+ event.clientX +
     ' -Posición Y: ' + event.clientY);
 })