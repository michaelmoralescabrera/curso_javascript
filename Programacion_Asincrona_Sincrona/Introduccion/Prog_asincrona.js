//programacion asincrona es la que no bloquea el hilo principal
//programacion sincrona es la que bloquea el hilo principal


//Sincrono
//accion 1
console.log("Inicio del proceso");

//accion 2
setTimeout(function(){
    for(let i=0; i<10; i++){
        console.log(i);
    }
}, 0)//el 0 es el tiempo de espera en milisegundos

//accion 3
console.log("Fin del proceso");

