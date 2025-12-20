/*
let socket = new WebSocket('ws://localhost:8080');
Esa línea crea una conexión en tiempo real entre tu navegador y un servidor local usando WebSockets.
- let socket: Crea una variable llamada socket.
- new WebSocket(...): Abre una conexión WebSocket.
- 'ws://localhost:8080': Es la dirección del servidor WebSocket.
- ws:// significa que es una conexión WebSocket (como http://, pero para tiempo real).
- localhost:8080 indica que el servidor está corriendo en tu propia computadora, en el puerto 8080.

*/

let socket = new WebSocket('ws://localhost:8080');
let mensajeingresado = document.getElementById('mensajeIngresado');
let botonenviar = document.getElementById('botonenviar');


function mostrarmensajes(contenido){
    let contenedorMensajes = document.getElementById('mensajesChat');
    let elementomensaje = document.createElement('p');
    //innerText se usa en JavaScript para leer o modificar el texto visible dentro de un elemento HTML
    elementomensaje.innerText = contenido;
    contenedorMensajes.appendChild(elementomensaje);
}

botonenviar.onclick = function(){
    let mensaje = mensajeingresado.value;
    mostrarmensajes(mensaje);
    socket.send(mensaje);
};

socket.onmessage = function(event){
    let mensaje = event.data;
    mostrarmensajes(mensaje);
}



/*
1. Conexión WebSocket
let socket = new WebSocket('ws://localhost:8080');
- Crea una conexión con el servidor WebSocket en tu máquina local, puerto 8080.
- Esto permite enviar y recibir datos sin recargar la página.

2. Referencias a elementos HTML
let mensajeingresado = document.getElementById('mensajeIngresado');
let botonenviar = document.getElementById('botonenviar');
- mensajeingresado: es el input donde el usuario escribe su mensaje.
- botonenviar: es el botón que el usuario presiona para enviar el mensaje.

3. Función para mostrar mensajes
function mostrarmensajes(contenido){
    let contenedorMensajes = document.getElementById('mensajesChat');
    let elementomensaje = document.createElement('p');
    elementomensaje.innerText = contenido;
    contenedorMensajes.appendChild(elementomensaje);
}
- Crea un nuevo <p> con el texto del mensaje y lo agrega al contenedor del chat.
- Sirve tanto para mostrar mensajes enviados como recibidos.

4. Enviar mensaje al hacer clic
botonenviar.onclick = function(){
    let mensaje = mensajeingresado.value;
    mostrarmensajes(mensaje);
    socket.send(mensaje);
};
- Cuando haces clic en el botón:
- Toma el texto del input.
- Lo muestra en pantalla.
- Lo envía al servidor WebSocket.

5. Recibir mensajes del servidor
socket.onmessage = function(event){
    let mensaje = event.data;
    mostrarmensajes(mensaje);
}
- Cuando el servidor envía un mensaje:
- Lo recibe con event.data.
- Lo muestra en el chat.



*/