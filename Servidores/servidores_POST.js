
async function crearPost(titulo, contenido) {
    try {
        let respuesta = await fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: titulo,
                body: contenido,
                userId: 1,
            }),
        })
        if (!respuesta.ok) {// Verifica si la respuesta es exitosa,el signo ! indica negacion
throw new Error('Error en la solicitud: ' + respuesta.statusText);
        }
let datos = await (respuesta.json());
        console.log('Post creado con exito:', datos);
    } catch (error) {
        console.error('Error al crear el post:', error);
        
    }

}

crearPost('Mi nuevo post', 'Este es el contenido de mi nuevo post.');

/* Explicacion paso a paso del codigo

Paso a paso
async function crearPost(titulo, contenido) {


- Se define una función asincrónica que recibe dos parámetros: titulo y contenido.

try {


- Se inicia un bloque try para manejar errores si algo sale mal.

let respuesta = await fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        title: titulo,
        body: contenido,
        userId: 1,
    }),
})


- Se hace una solicitud HTTP POST a una API falsa.
- Se envía un objeto convertido a JSON con:
- title: el título del post
- body: el contenido
- userId: un ID de usuario ficticio (1)

if (!respuesta.ok) {
    throw new Error('Error en la solicitud: ' + respuesta.statusText);
}


- Se verifica si la respuesta fue exitosa (respuesta.ok).
- Si no lo fue, lanza un error con el mensaje de estado.

let datos = await respuesta.json();
console.log('Post creado con exito:', datos);


- Se convierte la respuesta en un objeto JavaScript (.json()).
- Se muestra en consola el resultado del post creado.

} catch (error) {
    console.error('Error al crear el post:', error);
}


- Si ocurre cualquier error, se captura y se muestra en consola.

Ejecución
crearPost('Mi nuevo post', 'Este es el contenido de mi nuevo post.');


- Se llama a la función con un título y contenido de ejemplo.

 En resumen
Esta función:
- Envía datos a una API simulada.
- Usa fetch para hacer la solicitud.
- Maneja errores con try/catch.
- Muestra el resultado en consola.
¿Quieres que te muestre cómo adaptar esto para una API real o cómo mostrar el resultado en una página web?

if (!respuesta.ok) {
    throw new Error('Error en la solicitud: ' + respuesta.statusText);
}


- Se verifica si la respuesta fue exitosa (respuesta.ok).
- Si no lo fue, lanza un error con el mensaje de estado.

let datos = await respuesta.json();
console.log('Post creado con exito:', datos);


- Se convierte la respuesta en un objeto JavaScript (.json()).
- Se muestra en consola el resultado del post creado.

} catch (error) {
    console.error('Error al crear el post:', error);
}


- Si ocurre cualquier error, se captura y se muestra en consola.

Ejecución
crearPost('Mi nuevo post', 'Este es el contenido de mi nuevo post.');


- Se llama a la función con un título y contenido de ejemplo.



En resumen
Esta función:
- Envía datos a una API simulada.
- Usa fetch para hacer la solicitud.
- Maneja errores con try/catch.
- Muestra el resultado en consola.



*/