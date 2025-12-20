class Animal{
    constructor(nombre, peso, edad){
        this.nombre = nombre;
        this.peso = peso;
        this.edad =edad;
     }
     informacion(){
        return this.nombre + this.peso + 'Kg.' + this.edad + 'años';
     }
}

class Perro extends Animal{
    constructor(nombre, peso, edad, raza){
        super(nombre, peso, edad);
        this.raza = raza;
    }
    informacion(){
        return this.nombre + this.peso + 'Kg.' + this.edad + 'años' +
        this.raza;
    }

}

class Gato extends Animal{
    constructor(nombre, peso, edad, sexo){
        super(nombre, peso, edad);
        this.sexo = sexo;
    }
    informacion(){
        return this.nombre + this.peso + 'Kg.' + this.edad + 'años' +
        this.sexo;
    }

}

class Conejo extends Animal{
    constructor(nombre, peso, edad, color){
        super(nombre, peso, edad);
        this.color = color;
    }
    informacion(){
        return this.nombre + this.peso + 'Kg.' + this.edad + 'años' +
        this.color;
    }

}


let perro1 = new Perro('copper', 12, 3, 'Malinois');
let gato1 = new Gato('Misifus', 5, 1, 'Masculino');
let conejo1 = new Conejo('Bugs', 3, 1, 'Blanco');
let animales = [perro1, gato1, conejo1];
function mostrarAnimales(){

let lista = document.getElementById('listaAnimales');


for(let animal of animales){
    let item = document.createElement('li');
    item.textContent = animal.informacion();
    lista.appendChild(item);
}

}


/*
Explicacion del for de arrriba:

- for (let animal of animales)
Recorre cada elemento del arreglo animales. Cada elemento se guarda temporalmente en la variable animal.

- document.createElement('li')
Crea un nuevo elemento HTML de tipo <li> (elemento de lista).

- item.innerText = animal.informacion();
Asigna al texto del <li> el resultado de llamar al método informacion() del objeto animal. Este método devuelve una descripción o dato del animal.

- lista.appendChild(item);
Agrega el <li> recién creado al elemento lista, que debe ser un <ul> o <ol> previamente definido en el HTML.
appendChild sirve para agregar un elemento dentro de otro en una página web.



*/