//Axios es una biblioteca de cliente HTTP basada en promesas para el navegador y node.js. 
// Proporciona una forma sencilla de realizar solicitudes HTTP y manejar respuestas.

//Axios es una librería que te ayuda a hacer peticiones HTTP desde tu código JavaScript. Es como un mensajero que va al servidor, pide información y te la trae de vuelta.
//Para usar Axios, primero necesitas instalarlo. Si estás usando npm, puedes hacerlo con el siguiente comando:
//npm install axios

function obtenerInfo(){
    //Hacemos una petición GET a la URL proporcionada usando Axios
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then (function (response) {
        let listainformacion = document.getElementById("listaInfo");
        //response.data.length nos da la cantidad de elementos que hay en la respuesta
        for(let i=0; i<response.data.length; i++){
            //Crear un elemento de lista por cada post que recibimos de cada vuelta que da el for
            let elemento = document.createElement("li");
            //Asignar el título del post al texto del elemento de lista que creamos,extrae solo los títulos de los posts
            elemento.innerText = response.data[i].title;
            //Agregar el elemento de lista a la lista en el HTML
            listainformacion.appendChild(elemento);
        }

})
//la siguiente parte maneja los errores en caso de que la petición falle
    .catch (function (error){
        console.log("Ocurrió un error: " + error);
    });
      
}


/*
Explicación del código:

function obtenerInfo() {


- Se define una función llamada obtenerInfo.

axios.get('https://jsonplaceholder.typicode.com/posts')


- Se usa Axios, una librería que permite hacer peticiones HTTP fácilmente.
- Aquí se hace una petición GET a una URL que devuelve una lista de publicaciones falsas (ideal para pruebas).

.then(function (response) {


- Si la petición fue exitosa, se ejecuta esta parte.
- response contiene los datos que llegaron desde la API.

let listainformacion = document.getElementById("listaInfo");

- Busca un elemento en el HTML con el ID "listaInfo" (por ejemplo, una <ul> o <ol>).

for(let i=0; i<response.data.length; i++) {

- Recorre todos los elementos que llegaron en la respuesta (response.data es un arreglo de objetos).

let elemento = document.createElement("li");
elemento.innerText = response.data[i].title;
listainformacion.appendChild(elemento);


- Crea un nuevo elemento de lista (<li>).
- Le pone como texto el título de cada publicación (title).
- Lo agrega dentro del elemento "listaInfo" en el HTML.

.catch(function (error) {
    console.log("Ocurrió un error: " + error);
});


- Si algo falla (por ejemplo, no hay internet), se muestra un mensaje de error en la consola.


*/

