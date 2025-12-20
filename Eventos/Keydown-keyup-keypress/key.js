//¿Qué son keydown, keyup y keypress?
//Son eventos de teclado que te permiten saber cuándo el usuario presiona o suelta una tecla. 
// Se usan para hacer cosas como validar entradas, mover objetos, activar comandos, etc.

//KEYDOWN - Cuando el usuario presiona una tecla - Detectar teclas al instante
//KEYUP - Cuando el usuario suelta una tecla - Saber cuándo terminó de presionar
//KEYPRESS - Cuando el usuario presiona una tecla que genera texto - Detectar letras y números (ya no se usa mucho)



//EJEMPLO keydown: donde solo se permite que se ingresen numeros y no letras, se utiliza el codigo ascii para validar cuales combinaciones son para los numeros del 1 al 0
//en este caso el rango es desde 48 para el 1, 49 para el 2 hasta el 57 para el 0.

/* event.keyCode 
Es una propiedad que te dice qué tecla se presionó, usando un número único para cada tecla en ascii.
Por ejemplo:
- La tecla "A" tiene el keyCode 65
- La tecla Enter tiene el keyCode 13
- La tecla Escape tiene el keyCode 27
 */

/*
let texto1 = document.getElementById('mitexto')

function verifica_numero(event){

    if(event.keyCode < 48 || event.keyCode > 57){
        event.preventDefault();
    }
}
texto1.addEventListener('keydown', verifica_numero);

*/


//EJEMPLO 2 keyup y keypress: con keyup nos va a mandar el mensaje cuando se suelte la tecla y con keypress nos va a decir que tecla se utilizo
//Se trabaja con la consola desde el navegador


/* Qué hace event.target.value en JavaScript?
Esta línea se usa cuando estás escuchando un evento (como escribir en un input), y te permite obtener el valor actual del elemento que disparó el evento.
Es decir:
event.target = el elemento que activó el evento
.value = el contenido que tiene ese elemento (como lo que el usuario escribió)


¿Qué hace event.key en JavaScript?
event.key te dice qué tecla presionó el usuario durante un evento de teclado.


 */

let texto1 = document.getElementById('mitexto')

function verifica_numero(event){

    if(event.keyCode < 48 || event.keyCode > 57){
        event.preventDefault();
    }
}
texto1.addEventListener('keydown', verifica_numero);

texto1.addEventListener('keyup', function(event){
  console.log('Entrada del usuario: ' + event.target.value);
});
  
texto1.addEventListener('keypress', function(event){
    console.log('Caracter ingresado: ' + event.key);
})




