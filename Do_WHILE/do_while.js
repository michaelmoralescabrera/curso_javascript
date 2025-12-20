//DO WHILE
//Que es do while?
//Es un ciclo que se ejecuta al menos una vez y luego verifica la condicion


//en el ejemplo se pide que haga todo lo que este dentro del do mientras que la condicion se cumpla
//en este caso se pide que el usuario ingrese un valor y si es diferente de 1, 
// se vuelve a pedir el valor

/*let valor;
do {

    valor = parseInt(prompt("Ingrese valor 1 para salir: "));
document.writeln("El valor ingresado es: " + valor + "<br>");
} while (valor !=1);
document.writeln("El ciclo ha terminado porque el valor ingresado es 1.");*/


//otro ejemplo de do while

// \n sirve para colocar un salto de linea dentro del prompt

let usuario, clave, control;

control = 0;

usuario = prompt('Ingrese su usuario');
clave = prompt('Ingrese su contraseña');

do {
    if(clave != 'LuisMich2025'){
        clave = prompt('CONTRASEÑA INCORRECTA\n' +
                'INTENTE DE NUEVO' );
                control = 0;         
    }else{
        control = 1;
    }

} while (control != 1);
document.writeln('ACCESO CORRECTO');




