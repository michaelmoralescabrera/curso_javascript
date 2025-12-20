//FOR

//Se utiliza cuando sabemos cuantas veces queremos que se ejecute el bucle

/*for (let f = 1; f<=5; f++) {
   document.writeln('Vuelta no. ', f, '<br>');
}
document.writeln('Fin del bucle');*/

//otro ejemplo
/*for (let f = 1; f<=20; f+=2) {
  if(f==15){
    document.writeln('aqui el valor es: ' + f + '<br>' )
  }
}
document.writeln('Fin del bucle');*/


//Recorrer un array con for
//frutas.lemgth indica el numero de elementos(tamaño del arreglo), en este caso son 4 
const frutas = ['manzanas', 'fresas', 'uvas', 'naranjas'];

for (let f = 0; f < frutas.length; f++){
document.writeln('Frutas: ',f,' = ', frutas[f], '<br>');

}




