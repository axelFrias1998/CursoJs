console.log(window.navigator.appName);
console.log(window.navigator.appVersion);

const nombre = prompt();
console.log(`Bienvenido, ${nombre}`);

if(confirm('¿Eliminar?')){
    console.log('Eliminado');
}
else{
    console.log('Nada pasó.');
}

let altura, anchura;
//Interfaz navegador
altura = window.outerHeight;
anchura = window.outerWidth;
console.log(altura);
console.log(anchura);
altura = window.innerHeight;
anchura = window.innerWidth;

let ubicacion = window.location;
console.log(localStorage);