//get = obtener el valor actual
//set = establecer un nuevo valor 
//get y set se utilizan dentro de una clase pero fuera del constructor 




//ejemplo 1
class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get Dato(){
        return this._nombre;
    }

    get Dato(){
        return this._nombre;
    }

}
/*
//Para get
let persona1 = new Persona('luis', 'Morales');
persona1.Dato;
document.writeln(persona1.Dato);
*/

//para set
let persona2 = new Persona('Luis', 'Morales');
persona2.Dato ='Michael';
document.writeln(persona2.Dato);


/*
//Ejemplo 2

class Deportitas{
    constructor(nombre, apellido){
               this._nombre = nombre;
               this._apellido = apellido;
    }
  }

  //Se genera la subclase

  class Futbolista extends Deportitas{
    constructor(nombre, apellido, goles){
        //no se define nombre ni apellido ya que los toma de la clase Deportistas, 
        // para que los tome se coloca la siguiente linea, solo se define goles que pertenece a esta clase
        super(nombre,apellido);
        this._goles = goles;
    }

    get Dato(){
        return this._goles;
    }

    set Dato(nuevogoles){
        this._goles = nuevogoles;
    }


  }

  //para el get
  let Futbolista1 = new Futbolista('Luis', 'Morales', 5);
  Futbolista1.Dato;
  document.writeln(Futbolista1.Dato);


  //para el set
  let Futbolista2 = new Deportitas('luis', 'Morales', 6);
  Futbolista2.Dato = 7;
  document.writeln(Futbolista2.Dato);

  */