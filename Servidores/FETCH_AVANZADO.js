//Solicitar credenciales de un sitio
//fetch sirve para hacer peticiones HTTP

/*
//Usando basic auth para autenticar al usuario
let usuario = 'usuario1';
let password = '12345';

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
    credentials: 'include', // Incluir cookies en la solicitud
    //headers sirve para enviar informacion adicional en la peticion
    headers:{
        //basic es un metodo de autenticacion que codifica las credenciales en base64 
        // y las envia en el encabezado de autorizacion de la solicitud HTTP
        //btosa sirve para codificar en base64 una cadena de texto 
        'Authorization': 'Basic ' + btoa(usuario + ':' + password),
        'content-type': 'application/json'

    }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));

*/

/*
//Usando token de portador (Bearer Token) para autenticar al usuario
let token = 'miToken';
let usuario = 'usuario1';
let password = '12345';

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
    credentials: 'include', // Incluir cookies en la solicitud
    cache: 'no-cache', // Evitar el almacenamiento en caché de la solicitud
  //cache: 'reload', // Forzar la recarga de la solicitud desde el servidor
  //cache: 'force-cache', // Usar la versión en caché de la solicitud si está disponible
  //cache: default, // Usar la configuración de caché predeterminada del navegador
  //cache: only-if-cached, // Usar solo la versión en caché de la solicitud (solo para solicitudes GET)

  //headers sirve para enviar informacion adicional en la peticion
    headers:{
        //Bearer token es un metodo de autenticacion que utiliza un token de acceso
        // para autenticar al usuario en lugar de enviar credenciales en cada solicitud
        'Authorization': 'Bearer ' + token,
        'content-type': 'application/json'

    }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));

*/

//Redirecciones con fetch

let token = 'miToken';
let usuario = 'usuario1';
let password = '12345';

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
    credentials: 'include', // Incluir cookies en la solicitud
    cache: 'no-cache', // Evitar el almacenamiento en caché de la solicitud
    redirect: 'follow', // Seguir redirecciones automáticamente (este es el valor predeterminado)
  //redirect: 'manual', // No seguir redirecciones automáticamente
  //redirect: 'error', // Generar un error en caso de redirección

  //headers sirve para enviar informacion adicional en la peticion
    headers:{
        //Bearer token es un metodo de autenticacion que utiliza un token de acceso
        // para autenticar al usuario en lugar de enviar credenciales en cada solicitud
        'Authorization': 'Bearer ' + token,
        'content-type': 'application/json'

    }
})
.then(response =>{
if(response.type === 'opaqueredirect'){
    let nuevaubicacion = response.headers.get('Location');
    console.log('Redirigiendo a:', nuevaubicacion);
}else{
    return response.json();
}
})

.then(data => console.log(data))
.catch(error => console.error('Error:', error));