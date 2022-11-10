// manipulacion de arreglos 


// ForEach 

var letras = ['a','b','c','d','e'];
// console.log(letras.length);

 // for (let i = 0; i < letras.length; i++) {
  //  const element = letras[i];
  //  console.log(element);
    //  }  

    letras.forEach((elemento)=> console.log(elemento));
    // for each recorre los elementos dentro del arreglo



  // push - shift - pop ---- son mutables, modifican arreglo en el que ellos trabajan
  var letras = ['a','b','c','d','e'];
letras.push('f');
console.log(letras);

var primerElemento = letras.shift()
//console.log(primerElemento);
console.log(letras);


var ultimoElemento = letras.pop()
console.log(ultimoElemento);
console.log(letras);




// map --- is numutable -- debe retornar el elemento modificado
var estudiantes = ['Rodrigo','Jerry','Emilio','Paca'];
var asistencia = estudiantes.map((nombre)=> `${nombre}.`)
console.log(estudiantes);
console.log(asistencia);
console.log(estudiantes);



var productos = [{
nombre:'camisetas',precio : 15},
{nombre : 'zapatos' , precio : 20},
{nombre: 'pantalon', precio: 25 }]

var productosImpuesto = productos.map((producto)=>{
return {
  ...producto,
  impuesto:.12

} // para que modifique debe ser retornada

})

var precios = productos.map((producto) => producto.precio)

console.log(productos);
console.log(productosImpuesto);
console.log(precios);





// filtrer

var filtrado = estudiantes.filter((estudiante)=> estudiante.edad >= 21 && estudiante.matriculado);
console.log(estudiantes);
console.log(filtrado); 




// reduce 
var calificaciones = [3,5,9,10,10];
var suma = calificaciones.reduce((acumulador,calificacion)=>acumulador + calificacion, 0) // reduce que recibe dos parametros, la primera es la funcion y la segunda un estado inicial del acumulador
console.log(calificaciones);
console.log(suma);
console.log(suma / calificaciones.length);  // length retorna la cantidad de elementos dentro de un arreglo


// otro ejemplo
var edades = [21,23,43,23,21,43,23,21,43,23]


// salida
// {
 // 21: 3,
 // 43: 3
// } 

var resultado = edades.reduce((acumulador,edad)=>{
if (!acumulador[edad]) {
  acumulador[edad] = 1
} else {
  acumulador[edad] +=1
}
return acumulador
},{})

console.log(edades);
console.log(resultado);


// otro ejemplo
var ventas = [
  {nombre: 'camiseta',precio:15,totalVendido:10},
  {nombre: 'zapatos',precio:150,totalVendido:8},
  {nombre: 'pantalon',precio:20,totalVendido: 30},
]

var resultado = ventas.reduce((acumulador,producto)=>{
  let totalVentas = producto.precio*producto.totalVendido;
  acumulador[producto.nombre] =  totalVentas;
  return acumulador // importante
},{})
console.log(ventas);
console.log(resultado);



// otro ejercicio
var estudiantes = [
  {nombre: 'Rodrigo', edad: 22, matriculado: true},
  {nombre: 'Manu', edad: 23, matriculado: true},
  {nombre: 'Uziel', edad: 21, matriculado: false},
  {nombre: 'Rul', edad: 20, matriculado: true},
  {nombre: 'Choyi', edad: 3, matriculado: false},

];


var resultado = estudiantes
.map((estudiante)=> estudiante.matriculado)
.reduce((acumulador,item)=>{
if (item) {
  acumulador.matriculado +=1
} else {
acumulador.noMatriculado +=1
}
return acumulador

},{matriculado:0,noMatriculado:0}) 

console.log(estudiantes);
console.log(resultado);



// some -- every -- some = verifica si uno de todos cumple con una condicion si la cumple retorna true o false -------- every si todo cumple 


// some
var numeros = [1,3,5,7,9];
var resultado = numeros.some((numero)=> numero % 2=== 0);
console.log(resultado);




// every 
var numeros = [1,2,3,4,5,6,7,8,9,10];
var resultado = numeros.every ((numero)=>numero %2 ===0);
console.log(resultado);



// find -- findIndex 
// FIND
var clientes = [
  { id: 1, nombre:'Rodrigo'},
  { id: 2, nombre:'Paca'},
  { id: 3, nombre:'Niurka'},
  { id: 4, nombre:'Frodo'},
  { id: 5, nombre:'Zeus'}
]

var cliente = clientes.find((cliente)=> cliente.id === 1) ;// felcha igual a recibe una funcion, pa recordar
var filtrer = clientes.filter((cliente)=> cliente.id === 1) ; 
console.log(clientes);
console.log(cliente);
console.log(filtrer);

// FIND INDEX --- retorna la posicion
var clientes = [
  { id: 1, nombre:'Rodrigo'},
  { id: 2, nombre:'Paca'},
  { id: 3, nombre:'Niurka'},
  { id: 4, nombre:'Frodo'},
  { id: 5, nombre:'Zeus'}
]

var posicion = clientes.findIndex((cliente)=> cliente.id === 2 );
console.log(posicion);
console.log(clientes[posicion]);


// includes 
var mascotas =['perro' ,'gato','conejo'];
var resultado = mascotas.includes('gato')
console.log(resultado);
console.log('rodrigo'.includes('a'));



var buscador = (parametro) => {
  let clientes = [
    { id: 1, nombre:'Rodrigo'},
    { id: 2, nombre:'Paca'},
    { id: 3, nombre:'Niurka'},
    { id: 4, nombre:'Frodo'},
    { id: 5, nombre:'Zeus'}
  ]
return clientes.filter((cliente)=>cliente.nombre.includes(parametro) )
}


console.log(buscador('ca'));


// Join -- separa depende que le pongas xd 
var elementos = ['aire','fuego','agua']
var resultado = elementos.join('.')
console.log(resultado);

var clientes = [
  { id: 1, nombre:'Rodrigo'},
  { id: 2, nombre:'Paca'},
  { id: 3, nombre:'Niurka'},
  { id: 4, nombre:'Frodo'},
  { id: 5, nombre:'Zeus'}
]

// console.log(clientes.join());
var csVGenerator 