// async await es una forma mas sencilla de manejar promesas en JavaScript

// Una funcion async siempre devuelve una promesa

/*
function obtenerDatos() {
    // fetch devuelve una promesa
    return fetch('https://api.datos.gob.mx/v1/precio.gasolina.publico')
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos) {
        console.log(datos);
    })
    .catch(function(error){
        console.error(error);
    });

}
obtenerDatos();
console.log('Esto se ejecuta despues de llamar a obtenerDatos');





Este código consulta una API pública del gobierno de México para obtener los precios de la gasolina y luego muestra los datos en la consola. También maneja errores si algo sale mal.

🔍 Paso a paso
function obtenerDatos() {


- Se define una función llamada obtenerDatos.
    return fetch('https://api.datos.gob.mx/v1/precios.gasolina.publico')


- Se usa fetch para hacer una solicitud HTTP a la URL de la API.
- fetch devuelve una promesa, que es como decir: “Voy a traer los datos, espera un momento”.
    .then(function(respuesta){
        return respuesta.json();
    })


- Cuando la respuesta llega, se convierte en formato JSON (que es como un objeto en JavaScript).
    .then(function(datos) {
        console.log(datos);
    })


- Una vez que los datos están listos, se imprimen en la consola.
    .catch(function(error){
        console.error(error);
    });


- Si ocurre un error (por ejemplo, no hay internet o la API falla), se muestra el error en la consola.

🕒 ¿Qué pasa después?
obtenerDatos();
console.log('Esto se ejecuta despues de llamar a obtenerDatos');


- Se llama a la función obtenerDatos.
- Luego se imprime el mensaje “Esto se ejecuta después…” inmediatamente, antes de que los datos lleguen, porque fetch es asíncrono (no bloquea el flujo del programa).


*/

//utilizando async await
async function obtenerDatos() {
    // fetch devuelve una promesa
    let respuesta = await fetch('https://api.datos.gob.mx/v1/precio.gasolina.publico');

    let datos = await respuesta.json();
    console.log(datos);



}
obtenerDatos();
console.log('Esto se ejecuta despues de llamar a obtenerDatos');