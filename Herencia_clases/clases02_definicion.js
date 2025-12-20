//Tipos de clases

//clase nombrada
class Papel{
    //estamos crenado el contructor de un objeto dentro de una clase
constructor(alto, ancho){
    this.alto = alto;
    this.ancho = ancho;

}

}
let papel_r = new Papel(5,6);
papel_r.alto;
papel_r.ancho;
document.writeln(papel_r.alto);
document.writeln('<br>')

//Clase anonima ya que no tiene un nombre
let Papel_A = class{
constructor(alto, ancho){
    this.alto = alto;
    this.ancho = ancho;
}
}
let papel_z = new Papel_A(2,5);
papel_z.alto;
papel_z.ancho;
document.writeln(papel_z.alto+' '+papel_z.ancho);
document.writeln('<br>')




//clase nombrada
let Papel_B = class Papelx{
constructor(alto, ancho){
    this.alto = alto;
    this.ancho = ancho;
}
}

Papel_B.alto = 8;
Papel_B.ancho =7;

document.writeln(Papel_B.alto+' '+Papel_B.ancho);