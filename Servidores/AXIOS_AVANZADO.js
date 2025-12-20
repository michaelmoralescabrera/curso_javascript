 //Axios es una librería basada en promesas para hacer solicitudes HTTP en JavaScript.
  //Permite realizar solicitudes al servidor y manejar las respuestas de manera sencilla.
//Axios se debe instalar previamente en el proyecto mediante npm o yarn.
    //Para instalar Axios, se puede usar el siguiente comando: 
//npm install axios en la terminal del proyecto.

/*
//Sintaxis básica para hacer una solicitud GET con Axios:
axios.get('https://api.example.com/data')
  .then(function (response) {
    console.log(response.data);
  })
    .catch(function (error) {
    console.error('Error fetching data:', error);
    });
*/

/*
//Ejemplo avanzado de uso de Axios con POST

let datos = {
    title: 'Nuevo Post',
    body: 'Este es el contenido del nuevo post',

}
axios.post('https://jsonplaceholder.typicode.com/posts', datos)
.then(respuesta => console.log('El post fue creado con exito', respuesta.data))
.catch(error => console.log('Error al publicar',error))

//Explicación del código:
//1. Se define un objeto "datos" que contiene la información que se desea enviar en la solicitud POST.
//2. Se utiliza axios.post() para hacer una solicitud POST a la URL especificada, enviando el objeto "datos" como cuerpo de la solicitud.
//3. Si la solicitud es exitosa, se imprime un mensaje de éxito junto con los datos de la respuesta en la consola.
//4. Si ocurre un error durante la solicitud, se captura y se imprime un mensaje de error en la consola.

*/

/*
//Ejemplo de axios con solicitudes simultaneas usando axios.all y axios.spread

let datos = {
    title: 'Nuevo Post',
    body: 'Este es el contenido del nuevo post',
}
let pedido1 = axios.get('https://api.example.com/data1');
let pedido2 = axios.get('https://api.example.com/data2');
let pedido3 = axios.get('https://api.example.com/data3');

axios.all([pedido1, pedido2, pedido3])
.then(axios.spread((respuesta1, respuesta2, respuesta3) => {
//codigo
}))
.catch(error => console.log('Error en las solicitudes', error));

//Explicación del código:
//1. Se definen tres solicitudes GET (pedido1, pedido2, pedido3) a diferentes URLs.
//2. Se utiliza axios.all() para ejecutar las tres solicitudes simultáneamente.
//3. Se usa axios.spread() para manejar las respuestas de cada solicitud por separado.
//4. Si todas las solicitudes son exitosas, se puede procesar cada respuesta dentro del bloque de código.
//5. Si alguna solicitud falla, se captura el error y se imprime un mensaje en la consola.

*/

//Ejemplo de interceptores en Axios son funciones que permiten interceptar y modificar las solicitudes o respuestas antes de que sean manejadas por then o catch.

//Interceptores de solicitud son útiles para agregar encabezados de autenticación, registrar solicitudes o modificar datos antes de enviarlos al servidor.

let datos = {
    title: 'Nuevo Post',
    body: 'Este es el contenido del nuevo post'
}

let mitoken = 'Este_es_mi_token';

axios.interceptors.request.use(
    (config) =>{
    config.headers.Authorization = 'Bearer $(mitoken)';
    return config;
},(error) => {
    return Promise.reject (error);
}
)

//Interceptor de respuesta
axios.interceptors.response.use(
    (response) => {
        response.data.customField = 'Este es un campo personalizado';
        return response;
    },(error) => {
        return Promise.reject (error);
    }
)

let pedido1 = axios.get('https://api.example.com/data1');
let pedido2 = axios.get('https://api.example.com/data2');
let pedido3 = axios.get('https://api.example.com/data3');

axios.all([pedido1, pedido2, pedido3])
.then(axios.spread((respuesta1, respuesta2, respuesta3) => {
//codigo
}))
.catch(error => console.log('Error en las solicitudes', error));

//Explicación del código:
//1. Se define un interceptor de solicitud utilizando axios.interceptors.request.use().
//2. En la función del interceptor, se agrega un encabezado de autorización a la configuración de la solicitud utilizando un token simulado.
//3. Se retornan las configuraciones modificadas para que la solicitud continúe.
//4. Se define un interceptor de respuesta utilizando axios.interceptors.response.use().
//5. En la función del interceptor de respuesta, se agrega un campo personalizado a los datos de la respuesta antes de que sea manejada por then.
//6. Se retornan los datos modificados para que puedan ser utilizados en el bloque then.
//7. Si ocurre un error en la solicitud o respuesta, se captura y se rechaza la promesa con el error correspondiente.
