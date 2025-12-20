//Eventos personalizados Los eventos personalizados en JavaScript son una forma de crear tus propias señales o 
// notificaciones dentro de una aplicación web, para que distintos componentes puedan comunicarse entre sí de manera 
// flexible y controlada. Son especialmente útiles cuando estás trabajando con interfaces dinámicas, componentes 
// reutilizables o quieres que algo ocurra en respuesta a una acción no cubierta por los eventos estándar 
// como click, keydown, etc.


//Ejemplo para crear un reproductor de musica

let audio = document.getElementById('audio');
let listacanciones = document.getElementById('listaCanciones');

listacanciones.addEventListener('change', cambiarCancion);

function cambiarCancion(){
    //Le pasa lo que se elige del select (value) a la variable cancionelegida
    let cancionElegida = listacanciones.value;
//Se le pasa al reprodutor la cancion que se elige
    audio.src = cancionElegida;
    //reproduce la cancion
    audio.play();

    //Se crea un evento personalizado que en este caso se va llamar cambio de cancion

    let evento = new CustomEvent('CambioDeCancion');
    audio.dispatchEvent(evento);
    }
    audio.addEventListener('CambioDeCancion', mostrarCancion);
    
    function mostrarCancion(){
        console.log('cancion actual: '+ listacanciones.value);
    }


    /*
    Línea por línea explicada

1. let evento = new CustomEvent('CambioDeCancion');

- Se crea un evento personalizado llamado "CambioDeCancion".
- CustomEvent es útil cuando quieres definir tus propios eventos, no solo los típicos como click o submit.

2. audio.dispatchEvent(evento);
- Se lanza (o "dispara") el evento sobre el elemento audio.
- Esto hace que cualquier función que esté escuchando ese evento se ejecute.

3. audio.addEventListener('CambioDeCancion', mostrarCancion);
- Aquí se le dice al elemento audio: “Cuando ocurra el evento 'CambioDeCancion', ejecuta la función mostrarCancion”.

4. function mostrarCancion(){
    console.log('cancion actual: ' + listacanciones.value);
}
- Esta función muestra en la consola el valor actual de listacanciones, que probablemente sea un <select> o algún input con la canción seleccionada.

    */

