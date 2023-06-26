// await nombreFuncion()
// 
// async function nombreFuncion() {
    // await console.log('hola mundo');
    // console.log(123);
// }


let batalla = (yoda,darthVader) => {
    console.log(yoda);
        console.log(darthVader);
}



class Personaje {
    constructor (nombre, fuerza) {
        this.nombre = nombre;
        this.fuerza = fuerza;
        this.vida =  100;
    }

    presentarse() {
        console.log( 'Nombre: ' + this.nombre + '\nFuerza: ' + this.fuerza + '\nVida: ')
    }
}

class Jedi extends Personaje {
    constructor (nombre, fuerza, vida) {
        super(nombre, fuerza,vida);
    }

    usarFuerza () {
        
    }
    entrenar () {
        this.fuerza+= 10;
    }
}
class MaestroJedi extends Jedi {
    constructor (nombre, fuerza, vida) {
        super(nombre, fuerza);
        this.vida = vida;
    }

    enseñar () {
        this.vida+= 20;
    }
}


class Sith extends Personaje {
    constructor (nombre, fuerza, vida) {
        super(nombre, fuerza);
        this.vida = vida;
    }

    usarFuerza () {
        console.log(' Estoy conquistando la galaxia');
    }

    corromper () {
        this.fuerza-= 5;
    }
}

class MaestroSith extends Personaje {
    constructor (nombre, fuerza, vida) {
        super(nombre, fuerza);
        this.vida = vida;
    }

    usarFuerza () {
        console.log(' Estoy conquistando la galaxia');
    }

    corromper () {
        this.fuerza-= 5;
    }
}


const yoda = new MaestroJedi('yoda',20,120);
yoda.presentarse();
yoda.usarFuerza();
yoda.enseñar();

const darthVader = new Sith('darthVader',17,110);
darthVader.presentarse();
darthVader.usarFuerza();
darthVader.corromper();
batalla(yoda,darthVader)
  

let botonSelect = document.getElementsByClassName("btn-seleccionar");

for (let i = 0; i < botonSelect.length; i++) {
  botonSelect[i].addEventListener("click", function() {
    let id = this.value;
    alert("Se hizo clic en el botón con el value: " + id);
  });
}





