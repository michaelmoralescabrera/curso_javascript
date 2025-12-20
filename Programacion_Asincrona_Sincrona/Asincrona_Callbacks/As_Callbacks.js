//callback es una funcion que se pasa a otra funcion como argumento
//para ser "llamada" (ejecutada) dentro de la funcion externa

function avanzaFila(callback){//callback es una funcion que se pasa como argumento
    setTimeout(function(){
        console.log("Tu turno ha llegado");
        callback();//llamamos a la funcion callback
}, 5000);//5000 milisegundos = 5 segundos
}
function llamada(){
    console.log("Te presenta a tu turno");
}
console.log("LLegas a la fila");
    
avanzaFila(llamada);//pasamos la funcion llamada como argumento a avanzaFila
console.log("Te vas a compar cafe");
//el orden de ejecucion sera:
//1. LLegas a la fila
//2. Te vas a comprar cafe
