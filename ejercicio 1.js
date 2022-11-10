/**
 * 1. Escribir un programa que calcule el número de segundos que existen en un día.

Para ello debemos multiplicar los segundos de un minuto, por los minutos de

una hora, por las horas de un día. Como todo el mundo sabe, un día tiene 86400 segundos.
 * 
 */

var segundos = 60;
var minuto = 60;
var hora = 24;

segundos  *=  minuto; // x = x * y
console.log(segundos);

var segundos = 3600 

segundos *= hora; 
console.log(segundos);

console.log( "El num de segundos que existe en el dia son", segundos);



// 2.  Realiza un programa que a partir de los valores ancho=2 y alto=5,
// calcule el área de un rectángulo.


var ancho = 2;
var largo = 5;
var area = ancho * largo;

area = ancho *= largo;

console.log(area);

/**
 *  3. Hacer un conversor de grados centígrados a grados Fahrenheit.

Para ello deberé multiplicar por 9/5 y sumar 32.

Como todo el mundo sabe, 20 grados centígrados son 68 grados Fahrenheit.
 * 
 */


