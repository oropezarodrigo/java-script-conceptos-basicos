// Ciclos

// while
var contador = 1;  // acordarse que empieza en 0
while (contador <=5) {
    console.log('Hola mundo');
contador += 1;
}

// Do while // primero suma uno y despues analiza la condicion
var contador = 6;

do {
console.log('Hola mundo');
contador +=1
} while(contador <=7)






var contador = 1; 
while (contador <=12) 

{
    console.log('Hola mundo');
contador += 1;
}

// For

/*  for (expresionInicial; expresionCondicional; expresiondeActuzalizacion); {
    Instrucciones 
}       */


for (let i = 0; i < 5; i++ ) {
    console.log('Hola mundo '); 
}

// for in - in retorna valor booleano si la clave esta en el objeto ---         for(variable operadorIn objeto) {    }
var persona = { 
    Nombre: 'Rodrigo',
Apellido: 'Oropeza',
edad: 22
}// RECORDATORIO : objeto tiene propiedades por lo que hay que poner valor 

for (let clave in  persona){
// instrucciones 
console.log(clave, persona [clave]);

} 

// for - of -                       for (){ }
var arreglo = [1,2,3,4,5]
var nombre = 'Rodrigo';

for (let valor of nombre) {
console.log(valor);

}