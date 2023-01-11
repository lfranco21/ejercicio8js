const { Logger } = require("web-dev-server/build/lib/Tools/Logger");

const verdadero = valor => {return true};

verdadero(20);
console.log(verdadero());

const saludo = valor => {console.log("Hola soy una promesa");}
setTimeout(saludo, 5000);

function* generaId() {
    let id= 0;
    while(true) {
        id += 2
        yield id
    }
}

const gen = generaId();

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)




