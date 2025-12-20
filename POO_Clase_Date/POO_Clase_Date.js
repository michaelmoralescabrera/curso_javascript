//POO_Clase_Date

//La clase date se utiliza para trabajar con fechas y horas
//permite generar objetos que representan momentos especificos en el tiempo,
//facilita la manipulacion de fechas, calculos de tiempo, gestion de horario, etc

const fechactual = new Date();
document.writeln(fechactual);
document.writeln('<br>');

//Se genera el objeto fecha
let fecha = new Date();
document.writeln('Hoy es ', fecha.getDate()); //objeto punto propiedad = valor, regla basica de los objetos, los metodos llevan parentesis
document.writeln('<br>');
document.writeln('El mes es: ', fecha.getMonth()+1);//se le agrega el +1 ya que cuando se inicia la cuenta de los meses enero seria el mes 0, febrero el mes 1
document.writeln('<br>');
document.writeln('El año es: ', fecha.getFullYear());
document.writeln('<br>');
document.writeln('La hora es: ', fecha.getHours(),':', fecha.getMinutes(),':', fecha.getSeconds());

