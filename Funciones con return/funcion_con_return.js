//funciones con return

//son funciones que utilizan una palabra clave 'return', 
// se utilizan para devolver un valor, 
// puede ser cualquier tipo de dato: una cadena, un array, un entero, etc
//return no escribe en la pagina, para eso se utiliza document.writeln
//return retorna el resultado de la suma que esta dentro de la funcion

/*
function suma(a , b){

    return a + b;
}
document.writeln(suma(30,60));
*/


//otro ejemplo
/*let resultado;
function suma(a , b){
resultado = a + b;
return resultado;
}
document.writeln(suma(20,60));
*/


//otro ejemplo
/*
let resultado;
function suma(a , b){
resultado = a + b;
return resultado;
}
document.writeln(suma(20,60));
document.writeln('<br>');

function saludar(){
    return 'Hola a todos' ;
}
var mensaje = saludar();
document.writeln(mensaje);
document.writeln('<br>');
//tambioen puede ser sin la variable mensaje

saludar();
document.writeln(saludar());

*/


//funcion que retorne un color dependiendo del valor que elija en usuario
// con el return el switch puede o no llevar break
function vercolor(valor){
    valor = parseInt(prompt('Ingresa un numero entre el 1 y 3: '));
    switch (valor) {
        case 1:
            return 'rojo';
            //break
        case 2:
            return 'verde';
            //break
        case 3:
            return 'azul';
            //break
        default:
            return 'Valor incorrecto'
           // break
            
    }
}

alert(vercolor());


