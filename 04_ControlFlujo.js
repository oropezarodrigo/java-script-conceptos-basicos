/**
 * 
 * Conntrol de flujo
 * 
 */

// Estructura IF 

//if (condicion){

// }


// ejemplo lluvia

var llueve = true;
if (llueve){
    console.log('Necesito un paraguas');

}

var administrador = 'administradora';
if ( administrador === 'administrador')  {
    console.log('Bienvenido al sistema');
};

//  ejemplo mayor de edad

const MARORIA_DE_EDAD = 18;
var edadPersona = 19;

if (edadPersona >= MARORIA_DE_EDAD) {
    console.log('Es mayor de edad');
    
} else {
    console.log('Es menor de edad');
}




// Ejemplo semaforo

var  semaforo = 'rojo'

if (semaforo === 'verde') {
    console.log('Arranca');

} else if (semaforo === 'amarillo') {
    console.log('Precaucion');
    
} 

else if (semaforo === 'rojo'){
console.log('Alto');

} else {

console.log('Color no identificado');
}



// switch
var producto = 'pera';
switch (producto ) {
    
    case 'papaya':
    case 'pera':    
        console.log('Las papayas y peras cuestan $1 cada libra');
// codigo
    break;
    case 'manzana':
        console.log('Las manzanas valen un dolar cada libra');
        // codigo --- leera esto xd 
        break;
        case 'uva' :
            console.log('la uva vale 20 pesos la libra');
        break; 
        default: // siempre al final 
        console.log('No disponemos de ese producto');
}

