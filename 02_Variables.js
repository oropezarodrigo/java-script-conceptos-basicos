/**
 * 
 * 
 *  Variables 
 * 
 *  3 formas de definir variables 
 * 
 * var
 * Let
 * const
 * 
 */


// variables con VAR 

var  nombre = "Rodrigo "; // x= 2
console.log(nombre);

var edad = 22;
console.log(edad);

var persona = { 
    nombre: "Rodrigo" , apellido: "Oropeza" , edad : "22" , 
    direccion: {

        calle: "Porto bello",
        numeroDeCasa: "33", 

    }, 
    ciudadesVisitadas: [


        "Jinotega",
        "CDMX",
        "Cancun"
    ]

}

var ciudad; 
ciudad = "Cancun";
ciudad = "Jinotega";
ciudad = 123;
console.log(ciudad);

// variables con let
let nombre = 'Rodrigo';
console.log(nombre);

{
    let saludo = 'hola soy rodri';
    console.log(saludo);
}
console.log(saludo);

{
    var saludo = 'hola soy rodri';
    console.log(saludo);
}
console.log(saludo);


// variable const 

const PI = 3.14;
PI = 3.141592
console.log(PI);



var nombre = 'Rodrigo';
var saludo =  ` hola soy ${nombre}

Como estas?
`
console.log(saludo);