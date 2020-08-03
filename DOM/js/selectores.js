/*getElementById
let encabezado;

encabezado = document.getElementById('encabezado');
encabezado.style.background = '#333';
encabezado.style.color = '#FFF';
encabezado.style.padding = '20px';

//Cambiar el texto
encabezado.textContent = 'Los mejores cursos';


console.log(encabezado);

//Query Selector
const encabezado = document.querySelector('#encabezado');

//Aplicar CSS
encabezado.style.background = '#333';
encabezado.style.color = '#fff';
encabezado.style.padding = '20px';
encabezado.textContent = 'Los mejores cursos';
console.log(encabezado);

let enlace;
enlace = document.querySelector('#principal a:first-child');
console.log(enlace);

const listaEnlaces = document.querySelector('#principal').getElementsByClassName('enlace');
console.log(listaEnlaces)
let enlaces = document.getElementsByClassName('enlace');

enlaces = enlaces[0];

console.log(enlaces);*/

const enlaces = document.querySelectorAll('#principal .enlace');


console.log(enlaces);

