/**
 * 
 * Operadores
 * 
 * 
 */

/**
 * 
 * Operadores de aignacion
 * 
 */

// Operador de asignacion

var x = 2;
var y = true;

// Operador de asignacion de adicion ( += )
var x = 2;
var y = 1;

x +=y; // x = x + y
console.log(x);

// Operador de asignacion resta ( -=)
var x = 1;
var y = 2;

x -= y; // x = x-y
console.log(x);

// Asignacion multiplicacion (*=)
var x = 1;
var y = 2;
x  *= y; // x = x * y
console.log(x);

// Asignacion de division (/=)

var x = 1;
var y = 2;

x /= y; // x = x/y
console.log(x);

//Operador de asignacion residuo - lo que sobra en division

var x = 1;
var y = 2;

x %= y; // x = x % y 
console.log(x);

// Asignacion de exponenciacion (**=)
var x = 2;
var y = 3;

x**=y; // x = x ** y
console.log(x);






/**
 * 
 * 
 * Operadores de comparacion
 * 
 */


// Operador igual (==)
console.log(3 == 3);
console.log(3 == '3'); // tener cuidado porque se esta comparando un num con string - ti liberas con esto del triple igua osea ===

// Operador no es igual (!=)
console.log(3 != 3);


// Operador estrictamente igual (===) // siempre usar , recomendable
console.log(3 === 3);
console.log(3 === '3'); 

// Operador desigualdad estricta (!==) // procurar usarlo 
console.log(3 !== '3');
console.log(3 != '3'); // no recomendable

// Operadores >, >=, <, <=
console.log(3 > 4);
console.log(3 >= 3);
console.log(2 < 4);
console.log(2 <= 4);

/**
 * Operadores aritmeticos 
 * 
 * +, -, *, /, %, **
 */

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 / 2);
console.log(2 % 2);
console.log(2 ** 2);

// Operadores de incremento (++)
var numero = 0;
//console.log(++numero); // no es necesario volver a ponerlo ya que aqui incrementa porque esta antes
console.log(numero++);
console.log(numero); // incrementa despues de que vuelvas a imprimir la variable cuando pones el ++numero

// Operador de decremento (--) , igual que arriba Xd

var numero  = 3;
// console.log(--numero);

console.log(numero--);
console.log(numero);



/**
 * 
 * Operadores logicos
*/

// AND 
console.log(true && true);  //  uso de tablas de verdad ejemplo - falso y verdadero igual a falso xd
console.log(2 > 3 && 1 <=2 );

// OR
console.log(true || false ); //  || es igual a or
console.log(false || false );

// NOT

console.log(!true);
console.log(!false);


// Operador de cadena o concatenacion (+) solo txt

var nombre = 'Rodrigo';
var apellido = 'Oropeza' ;
var nombresCompletos = nombre + ' '+ apellido; // espacio + ' '
console.log(nombresCompletos);

// Operador condicional (condicion, ? , val 1 o val 2 )
console.log(2 > 3  ?  ' es mayor' : 'es menor');



//  Operador de desestructuracion

var persona = {
nombre : 'Rodrigo',
apellido : 'Oropeza'


}

var { nombre: xyz, apellido}= persona;
console.log(xyz);
console.log(apellido);
console.log(persona);

// desestructuracion de arrreglos

var arreglo =  [1,2,3,4,5]

var [primeraPosicion, dos] = arreglo;
console.log(primeraPosicion, dos);

/**
 * 
 * Operador de miembro o acceso propiedad
 * 
*/

// Notacion punto 
var persona = {

    nombre : 'Rodrigo',
    apellido : 'Oropeza'

}

console.log(persona.nombre)
console.log(persona.apellido);

// Notacion por corchetes 

var persona = {

    nombre : 'Rodrigo',
    apellido : 'Oropeza'

}
console.log(persona ['nombre']);
console.log(persona ['apellido']);


// Notacion por corchetes en arreglos

var arreglo = [ 21,22,23,25,24,26]
console.log(arreglo [0]);

// operador de determinacion de tipon ( type of)

console.log('Rodrigo');
console.log(typeof 21);
console.log(typeof true);