// Funciones

// declarativa 

//function nombreFunction(){
    // cuerpo de nuestra funcion
//   }

function saludar() {
    console.log('hola soy rodri ');
}

saludar ();

function saludar(nombre) {
console.log(`Hola soy ${nombre}`);

}
saludar('rodri');


function saludar(nombre) {
    return `Hola soy ${nombre}` // primer almacenar y luego tratar la variable
    
}
var saludo = saludar ('Rodri');
console.log(saludo);
console.log(saludar('Rodri oropeza XD'));




// funciones de expreesion o anonimas // funcion como un valor y almacenar como variable
var suma = function(a,b){
return a+b;
}

console.log(suma (2,2));

// arrow function o flecha xd 


var resta = (a,b) => {
    if (typeof a === 'number' && typeof b === 'number') {
        return a-b;
    } else {
        return 'solo numeros';
    }
    }
console.log(resta(4,'2'));

// depende el uso cuando la funcion requiere mas amplio 
var multiplicar = (a,b) => a*b; 
console.log(multiplicar(2,2));