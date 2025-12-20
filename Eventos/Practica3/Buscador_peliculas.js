let selector = document.getElementById('miSelector');
let input = document.getElementById('miInput');
let boton = document.getElementById('miBoton');
let lista = document.getElementById('miListado');

let archivo = 'peliculas.json';

//Este evento hace referencia al select
selector.addEventListener('change', cambiarArchivo);
//Este evento personalizado cambiomodo se crea abajo dentro de la funcion cambiararchivo y 
// mensajemodo es el nombre de la funcion de abajo que se va a dispara al cambiar el archivo
selector.addEventListener('Cambiomodo', mensajemodo);
//Este evento va a bloquear que el usuario pueda ingresar numeros o signos en el imput, solo le debera permitir ingresar letras
input.addEventListener('keydown', verificaInput);
boton.addEventListener('click', buscar);

function cambiarArchivo(){
    archivo = selector.value;//este value hace referencia a los value de html que tiene los nombres de los archivos Json
   //Se crea el evento personalizado Cambiomodo que se ejecutara debajo en la funcion mensajemodo
    let evento = new CustomEvent('Cambiomodo');
    selector.dispatchEvent(evento);
}

function mensajemodo(){
    //Se usa swal.fire ya que es un estilo de mensaje que funciona junto con la URL que se coloco en HTML
    swal.fire('El archivo de busqueda ahora es '+ selector.value);
}
//Esta funcion si recive parametros porque tenemos que pasarle el evento, saber que teclas preciono el usuario, se usa el codigo ascii
//en el codigo ascii el abecedario de la A a la Z empieza desde el codigo 65 al 90 
//y que sea diferente al 32 que es el codigo de la barra espaciadora para que no la bloquee
// y tambien que sea diferente a 8 para que no bloquee la tecla de borrar

function verificaInput(evento){
    //Este (evento) hace referencia al que esta recibiendo la funcion verificaInput
    if((evento.keyCode < 65 || evento.keyCode > 90) && 
    evento.keyCode != 32 && evento.keyCode != 8){
        /* preventDefault se usa dentro de un manejador de eventos en JavaScript 
        para cancelar el comportamiento predeterminado que tendría ese evento en el navegador.
        Evita que una acción automática ocurra. Tú tomas el control.
        En este caso evita que se introduscan caracteres que esten fuera de lo permitido en el if
*/
        evento.preventDefault();
    }
}

/*

//Funcion de flecha

function buscar(){
    //¿Qué es innerHTML?
//Es una forma de leer o cambiar el contenido HTML que está dentro de un elemento en una página web.

    lista.innerHTML = '';//Esto limpia la lista cada vez que se da click en el boton buscar
    fetch(archivo)
    .then(respuesta => respuesta.json())
.then(function(salida){
    for(let item of salida.data){
        if(item.nombre.startsWith(input.value.toUpperCase())){
            let p = document.createElement('p');
            p.id = item.nombre;
            p.innerHTML = item.sinopsis;
            p.style.display = 'none';
            let li = document.createElement('li');
            li.innerHTML = item.nombre;
            li.addEventListener('mouseover', function(){
                let p = document.getElementById(item.nombre);
                p.style.display = 'block';
            });
            li.addEventListener('mouseout', function(){
                let p = document.getElementById(item.nombre);
                p.style.display = 'none';
            });
            li.appendChild(p);
            lista.appendChild(li);
            }
        }
    })

    .catch(function(error){
        console.log(error);
    });
}

 */

//Funcion de manera tradicional
 function buscar() {
    /* ¿Qué es innerHTML?
    Es una forma de leer o cambiar el contenido HTML que está dentro de un elemento en una página web.
    */
    lista.innerHTML = ''; // Esto limpia la lista cada vez que se da click en el botón buscar

    fetch(archivo)
    .then(function(respuesta) {
        return respuesta.json();
    })
    .then(function(salida) {
        for (let item of salida.data) {
            if (item.nombre.startsWith(input.value.toUpperCase())) {
                let p = document.createElement('p');
                p.id = item.nombre;
                p.innerHTML = item.sinopsis;
                p.style.display = 'none';

                let li = document.createElement('li');
                li.innerHTML = item.nombre;

                li.addEventListener('mouseover', function() {
                    let p = document.getElementById(item.nombre);
                    p.style.display = 'block';
                });

                li.addEventListener('mouseout', function() {
                    let p = document.getElementById(item.nombre);
                    p.style.display = 'none';
                });

                li.appendChild(p);
                lista.appendChild(li);
            }
        }
    })
    .catch(function(error) {
        console.log(error);
    });
}