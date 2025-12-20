//Promesas asincronas son aquellas que se ejecutan en segundo plano y no bloquean el hilo principal de ejecucion del programa.
//Permiten manejar operaciones que pueden tomar tiempo, como solicitudes de red o lectura de archivos, sin detener la ejecucion del codigo.

/*
//Ejemplo de promesa asincrona

let mipromesa = new Promise (function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if (error) {
            reject("Promesa rechazada");
        }else{
        resolve("Promesa cumplida");
        }
    })
});
mipromesa.then(function(valor){
    console.log(valor);
}).catch(function(error){
    console.log(error);
}); 

*/


/*
//Ejemplo de promesa sincrona 2

let promesa1 = new Promise(function(resolve, reject){
    setTimeout(resolve, 5000, "Promesa 1 cumplida");
});

let promesa2 = new Promise(function(resolve, reject){
    setTimeout(resolve, 7000, "Promesa 2 cumplida");
});

Promise.all([promesa1, promesa2]).then(function(valor){
    console.log(valor[0]+','+valor[1]);   
});
console.log("Esto se muestra antes de que las promesas se cumplan");
//Promise.all permite ejecutar multiples promesas en paralelo y esperar a que todas se cumplan antes de continuar con la ejecucion del codigo.

*/


//Ejemplo real de promesas asincronas

//Realizar una operacion asincrona para que haga una llamada a una API y obtenga datos de un usuario.

function obtenerUsuario(){
    return new Promise(function(resolve, reject){
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
xhr.onload = function(){
            if (xhr.status === 200) {
                let usuarios = JSON.parse(xhr.responseText);
                resolve(usuarios);
            }else{
                reject("Error al obtener los datos del usuario");
            }
         } 
        xhr.send();

        });
}
obtenerUsuario().then(function(usuarios){
    console.log(usuarios);
}).catch(function(error){
    console.error(error);
});

//En este ejemplo, la funcion obtenerUsuario realiza una llamada asincrona a una API para obtener datos de usuarios.
//La promesa se resuelve con los datos obtenidos si la solicitud es exitosa, o se rechaza con un mensaje de error si falla la solicitud.
//Luego, usamos .then() para manejar el resultado exitoso y .catch() para manejar cualquier error que pueda ocurrir.