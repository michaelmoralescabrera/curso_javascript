//Operadores lógicos AND e OR

//Operador AND (&&) e OR (||)

// Operador AND
/* let continente, edad;
continente = prompt('Ingrese un continente' );
edad = prompt('Ingrese su edad');

if (continente == 'Europa' && edad >= 18) {
    document.writeln('Puede ingresar a Europa');
}else{
document.writeln('No puede ingresar a Europa');
} 



// Operador OR
let dia, mes, anio;
dia = prompt('Ingrese el día');
mes = prompt('Ingrese el mes');
anio = prompt('Ingrese el año');

if( mes == 1 || mes == 2 || mes == 3) {
    document.writeln('pertenece al primer trimestre del año');
}else{
    document.writeln('No pertenece al primer trimestre del año');
}

//validar que el prompt no sea vacío
let continente, edad;
continente = prompt('Ingrese un continente');
edad = prompt('Ingrese su edad');
if (continente && edad) {
    if (continente == 'Europa' && edad >= 18) {
        document.writeln('Puede ingresar a Europa');
    } else {
        document.writeln('No puede ingresar a Europa');
    }
}
else {
    document.writeln('Debe completar todos los campos');
} */

//otra forma de validar que el prompt no sea vacío
let continente, edad;
continente = prompt('Ingrese un continente');
edad = prompt('Ingrese su edad');
if (continente != '' && edad != '') {
    if (continente == 'Europa' && edad >= 18) {
        document.writeln('Puede ingresar a Europa');
    } else {
        document.writeln('No puede ingresar a Europa');
    }
}else {
    document.writeln('Debe completar todos los campos');
}