//FOR IN utiliza un rango de valores especificos para hacer un bucle tomando como condicion 
//un obgeto o un elemento con un tamaño ya predefinido


//da una vuelta por cada letra que tiene la palabra JavaScript en este esta compuesta por 10 letras
//For in no funciona para valores enteros solo para elementos que tienen una cantidad de elementos

/*let palabra = 'JavaScript'
for(let f in palabra){
document.writeln(f);
document.writeln('<br>');

} */

//otro ejemplo que recorre la palabra tomando cada posicion iniciando desde 0
/*let palabra = 'JavaScript';

for(let f in palabra){
    document.writeln(palabra[f]);
    document.writeln('<br>');
} */

  //Otro ejemplo que indica cuantas vocales tiene la palabra murcielago
  
  let palabra = 'murcielago';
let vocal = 0;
  for(let f in palabra){
if(palabra [f] == 'a' || palabra [f] == 'e' ||
    palabra [f] == 'i' || palabra [f] == 'o' ||
    palabra [f] == 'u'){
               vocal++;//cuando encuentra una "vocal" la guarda en la variable vocal como un numero 
               // y aumenta a 1 en cada vuelta, al fianl suma la cantidad de vocales que encuentra
}
  }
document.writeln('Cantidad de vocales: ' + vocal);



