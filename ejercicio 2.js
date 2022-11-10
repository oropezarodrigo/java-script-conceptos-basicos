// Ejercicios Control de Flujos

// 1.Escribir un programa que según el día de la semana ingresado proporcione el día en inglés.

var dia = 'martes';

if (dia === 'lunes') {

    console.log('Monday');
    
}

else if (dia === 'martes') {
    console.log('Tuesday');
}

else if (dia === 'miercoles') {
    console.log('Wednesday');
}

else if (dia === 'jueves') {
    console.log(Thursday);
}

else if (dia === 'viernes') {
    console.log('Friday');
    
}

else if (dia === 'sabado') {
    console.log('Saturday');
    
}

else if (dia === 'domingo') {
    console.log('Sunday');
    
}

else {

    console.log('Día no identificado');
}



// El programa debe ser escrito dos veces, una con la declaración if else y otra con la declaración switch


var day = 'lunes';
switch (day) {

    case 'lunes' :
        console.log('day monday');
break;

case 'martes':
    console.log('day tuesday');
break;

case 'miercoles':
    console.log('day wednesday');
    break;

    case 'jueves':
        console.log('day thursday');
        break;

        case 'viernes':
            console.log('day friday');
            break;

        case 'sabado':
        console.log('day saturday');
        break;

        case 'domingo':
        console.log('day sunday');
        break;

        default :
        console.log('error');

    }

/*

.Escribir un programa que según el total de la compra, se agregue un valor de envio.

Si la compra es menor o igual a los $10 se agregará un gasto de envió de $3

Si la compra es menor o igual a los $20 y mayor a los $10 se agregará un gasto de envío de $5

Si la compra es menor o igual  a los $50 y mayor a los $20 se agregará un gasto de envío de $7

Si la compra supera los $50 el gasto de envío será gratuito


*/

// if else 

var envio  = '1';

if (envio <=10) {
    
    console.log('Se agregara 3 pesos a tu compra');    
}

else if (envio <=20)  
{ if(envio >10)

console.log('Se agragara 5 pesos a tu envio');
}

else if (envio <= 50) { if (envio >20)
    console.log('Se agregara 7 pesos a tu envio');


}

else if (envio >50) {
    console.log('Tu envio es gratis');
}


// switch - case 

var day = '10';
switch (day <=10) {

    case '3' :
        console.log('3 varos mas');
        
break;
}