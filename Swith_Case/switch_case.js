//Switch_Case
//Switch es una estructura de control que permite ejecutar diferentes bloques de código según el valor de una expresión.
//Es una alternativa a usar múltiples sentencias if...else cuando se tiene que comparar una misma variable con diferentes valores.

//programa que pida  un numero del 1 al 5 indicandole al usuario cual numero ingreso o indicandole que no ingreso un numero valido
/*let valor;
valor = parseInt(prompt("Ingrese un numero del 1 al 5: "));

switch (valor) {
    case 1:
        document.writeln("El numero ingresado es 1");
        break;
    case 2:
        document.writeln("El numero ingresado es 2");
        break;
    case 3:
        document.writeln("El numero ingresado es 3");
        break;
    case 4:
        document.writeln("El numero ingresado es 4");
        break;
    case 5:
        document.writeln("El numero ingresado es 5");
        break;
    default:
        document.writeln("No ingreso un numero valido");
        break; */


        let color = prompt('Ingrese un color (rojo, azul, verde, amarillo):');
        switch(color){
case 'rojo':
    document.writeln('El color es rojo');
    break;
case 'azul':
    document.writeln('El color es azul');
    break;
case 'verde':
    document.writeln('El color es verde');
    break;
case 'amarillo':
    document.writeln('El color es amarillo');
    break;
default:
    document.writeln('Color no reconocido. Por favor, ingrese rojo, azul, verde o amarillo.');
    break;
            }
