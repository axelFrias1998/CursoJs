const ciudades = ['Londres', 'New York', 'Madrid', 'Paris'];
const ordenes = new Set([123, 231, 132, 102]);
const datos = new Map();
datos.set('nombre', 'juan');
datos.set('profesión', 'desarrollador web');

//keys a las ciudades
//Entries iterador
/*
for(let entrada of ciudades.keys()){
    console.log(entrada);
}
//values
for(let entradas of ordenes.values()){
    console.log(entradas)
}*/

//Entries para map
//for(let entraada of datos.entries()){
//    console.log(entraada);
//}

const enlaces = document.getElementsByTagName('a');

for(let enlace of enlaces){
    console.log(enlace.href);
}