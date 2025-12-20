/*
//CALLBACKS ASINCRONOS son aquellos que se ejecutan despues de un tiempo determinado, es decir, no se ejecutan inmediatamente
function sumar(numero1,  numero2, callback){
    setTimeout(function(){
       if(typeof numero1 != 'number' || typeof numero2 != 'number'){
        return callback(new Error('Los parametros deben ser numeros'));
       }
       callback(null, numero1 + numero2);
    }, 1000);//el 1000 es el tiempo en milisegundos que tarda en ejecutarse, en este caso 1 segundo
}

sumar(20, '50', function(error, resultado){
    if(error){
        console.log(error);
    }else{
        console.log(resultado);
}
});

*/





/*
//Promesas son una forma de manejar operaciones asincronas de una manera mas sencilla y legible
function sumar(numero1,  numero2){
    return new Promise(function(resolve, reject){
setTimeout(function(){
         if(typeof numero1 != 'number' || typeof numero2 != 'number'){
        reject(new Error('Los parametros deben ser numeros'));
       }else{
        resolve(numero1 + numero2);
       }
    }, 1000);//el 1000 es el tiempo en milisegundos que tarda en ejecutarse, en este caso 1 segundo
})

}
sumar(30, 't')
.then(function(resultado){
    console.log(resultado);
}).catch(function(error){
    console.error(error);
})
*/




//ASYNC AWAIT es una forma de manejar operaciones asincronas de una manera mas sencilla y legible
async function sumar(numero1,  numero2){
        if(typeof numero1 != 'number' || typeof numero2 != 'number'){
        throw new Error('Los parametros deben ser numeros');//throw new Error es equivalente a reject en las promesas
       }
       return numero1 + numero2;

 }
 async function ejecutarSuma(){
    try{
        let resultado = await sumar(20, 'e');//await es equivalente a .then en las promesas
        console.log(resultado);
    }catch(error){
        console.error(error.message);//catch es equivalente a .catch en las promesas
    }
}

ejecutarSuma();


