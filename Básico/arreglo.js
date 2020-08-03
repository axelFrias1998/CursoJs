const numeros = [10, 20, 30, 40, 50];
console.log(numeros);
console.log(numeros[2]);

//Arreglo de Strings (método alternativo)
const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril');
meses[5] = 'Junio';
console.log(meses);
console.log(meses.length);


//Arreglo mezclado
const mezclado = ['Hola', 20, true, null, false, undefined];
console.log(mezclado);
console.log(Array.isArray(mezclado));
console.log(Array.isArray('Hola'));

//Encontrar en un arreglo
console.log('Abril en posición: ' + meses.indexOf('Abril'));

//Al inicio del arreglo
meses.unshift('Diciembre');
console.log(meses);

//Eliminar elemento
meses.pop();
console.log(meses);
meses.shift();
console.log(meses);
meses.splice(2, 1);
console.log(meses);

//Revertir 
meses.reverse();
console.log(meses);

//Ordenamiento
const frutas = ['Platano', 'Manzana', 'Fresa', 'Naranja'];
frutas.sort();
console.log(frutas);

//Ordenar númeroos
const numeros2 = [2, 31, 21, 89, 43, 200, 43, 9, 7, 75];
console.log(numeros2);
numeros2.sort(function(a, b){
    return a - b;
});
console.log(numeros2);