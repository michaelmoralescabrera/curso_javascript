//PUT_DELETE_PATCH sirve para actualizar o eliminar recursos en un servidor web.

//PUT se utiliza para reemplazar completamente un recurso existente en el servidor con una nueva representación.
//DELETE se utiliza para eliminar un recurso específico del servidor.
//PATCH se utiliza para aplicar modificaciones parciales a un recurso existente en el servidor.

/*
//Ejemplo de uso de PUT

fetch('https://jsonplaceholder.typicode.com/posts/5', {
    method: 'PUT',
    headers:{
     'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: 'nuevo titulo',
        body: 'nuevo contenido',

    })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));

*/

/*
//Ejemplo de uso de DELETE


fetch('https://jsonplaceholder.typicode.com/posts/5', {
    method: 'DELETE',
    
    })

.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));

*/


//Ejemplo de uso de PATCH

fetch('https://jsonplaceholder.typicode.com/posts/5', {
    method: 'PATCH',
    headers:{
     'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: 'nuevo titulo',
    

    })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
