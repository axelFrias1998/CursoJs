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