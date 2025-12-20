//funciones con parametros

//Son funciones que necesitan parametros para realizar una actividad en especifico dentr de nuestro codigo
//Se selecciona function - function Statement
/*let resultado;
function suma(valor1, valor2) {
    resultado = valor1 + valor2;
    alert('Resultado: ' +  resultado);//con alert no se usa coma para concatenar, se usa + y alert no usa salto de linea br
}
suma(5,8);*/

let resultado;
function suma(valor1, valor2) {
   valor1 = parseInt(prompt('Dame un numero: '));
   valor2 = parseInt(prompt('Dame otro numero: '))
   resultado = valor1 + valor2;
alert('Resultado: ' + resultado);
}
suma();