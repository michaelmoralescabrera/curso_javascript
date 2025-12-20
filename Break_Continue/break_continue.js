//BREAK-CONTINUE

//Nos ayuda a detener los bucles en un punto en especifico o para saber si se cumple o no una situacion, 
// tambien nos permite darnos un mensaje o un aviso cuando aun estan en proceso
//break y continue funciona con cualquier bucle no solo con for

//break
/*for(let f =0; f< 10; f++){
document.writeln(f);
document.writeln('<br>');
if(f==3){
    document.writeln('Aqui es la vuelta: ' + f + '<br>');
    break;

}
} */


//Continue

let palabra = 'michael';
let resultado = '';
for(let f in palabra){
    if(palabra[f] == 'a'){
        continue;// Con esta intruccion se le indica al programa 
        // que cada vez que encuentre una 'a' continue (que salte la letra a y continue)
    }else{
        resultado += palabra[f];// sino encuentra una letra 'a' 
        // entonces esta linea indica que en la vuelta que se dio en la variable palabra asigne 
        // la letra diferente de 'a' a la variable resultado con el operador de asignacion +=, 
        // asi en cada vuelta que haga guardando cada letra diferente de 'a' en la variable resultado
    }
}
document.writeln(resultado);

