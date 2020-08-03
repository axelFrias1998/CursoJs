for(let i = 0; i < 10; i++){
    if(i === 5){
        console.log('Voy en el 5');
        continue;
    }
    console.log(`Índice: ${i}`);
}

for(let i = 0; i < 10; i++){
    if(i % 2 == 0){
        console.log(`El número ${i} es par`);
    }
    else{
        console.log(`El número ${i} es non`);
    }
}

const arregloProductos = ['Camisa', 'Boleto', 'Guitarra', 'Disco'];

console.log(arregloProductos.length);
for(let i = 0; i < arregloProductos.length; i++){
    console.log(`El producto ${arregloProductos[i]} fue agregado`)
}

let i = 0;

while(i < 10){
    console.log(`Número: ${i}`);
    i++;
}

const musica = ['Canción 1', 'Canción 2', 'Canción 3'];
i = 0;
while(i < musica.length){
    console.log(`Reproduciendo la canción: ${musica[i]}`);
    i++;
}

i = 1000;
do{
    console.log(`Número: ${i}`);
    i++;
} while( i < 100);

//Recorrer arreglo con foreach
const pendientes = ['Tarea', 'Comer', 'Proyecto', 'JavaScript'];

//foreach
pendientes.forEach(function(pendiente, index){
    console.log(`${index}: ${pendiente}`);
});
console.log(pendientes);

//Map
const carrito = [
    {id: 1, producto: 'Libro'},
    {id: 2, producto: 'Disco'},
    {id: 3, producto: 'Camisa'},
    {id: 4, producto: 'Guitarra'}
];
const nombreProducto = carrito.map(function(carrito){
    return carrito.producto;
});
console.log(nombreProducto);

const automovil = {
    modelo: 'Camaro',
    motor: 6.1,
    anio: 1969,
    marca: 'Chevrolet'
};

for(let auto in automovil){
    console.log(`${auto}: ${automovil[auto]}`);
}