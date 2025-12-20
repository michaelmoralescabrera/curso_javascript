//POO_Clases_creaciondeobjetos.js

//Las clases son una forma de definir varios objetos y estructura de datos con un conjunto de propiedades y metodos,
//proporcionan una sintaxis mas clara y legible al trabajar con los objetos

class persona{
//se genera un atributo de clase: es una variable que definimos dentro de una clase,
//y que almacena datos que van a pertenecer a los objetos de esa clase, es decir los atributos 
//representan caracteristicas o propiedades que podra utilizar uno o varios objetos

//Atributos
nombre = 'Homero';
apellido = 'Simpson';
direccion = 'Ave. Siempreviva 742';
telefono = 5523219842
email = 'amantedelacomida@aol.com'

//metodos va a definir comportamientos o funcionalidades de los atributos, 
//en este caso los metodos que se usaran se llaman trabajar y estudiar
trabajar(){
    return 'trabaja en la planta nuclear';
    }
    estudiar(){
        return 'escuela primaria de Sprinfield'
    }
}

//Se genera un objeto para la clase persona

//con const (variable constante, puede usarse let o var) se esta generando un objeto con propiedades inalterables
//y con new se esta generando una nueva instancia de tipo objeto 
// y al colocar persona siginifca que van a estar disponibles 
// los metodos y atributos de la clase persona

const homero = new persona();//el objeto homero ya tiene acceso 
// a todos los atributos de la clase persona
const bart = new persona();//se genera otro objeto llamado bart 
// y tambien tiene acceso a los atributos de la clase persona
const lenny = new persona();

//Ahora se le da uso al objeto homero

document.writeln(homero.nombre+' '+homero.apellido+ '<br>');
document.writeln(homero.trabajar());
document.writeln('<br>');
document.writeln('bart ', bart.apellido, '<br>');
document.writeln('Estudia en: ', bart.estudiar());
document.writeln('<br>');
document.writeln('Lenny ', lenny.trabajar());







