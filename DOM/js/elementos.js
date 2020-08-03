const enlace = document.createElement('a');

//Agregar una clase
enlace.className = 'enlace';
enlace.id = 'nuevoId';
enlace.setAttribute('href', '#');
//enlace.textContent = 'Nuevo enlace';
enlace.appendChild(document.createTextNode('Nuevo enlace child'));

//Agregar
document.querySelector('#secundaria').appendChild(enlace);

console.log(enlace)

//REEMPLAZAR
const nuevoEncabezado = document.createElement('h2');

//Agregar un id
nuevoEncabezado.id = 'encabezado';
//Agregar nuevo texto
nuevoEncabezado.appendChild(document.createTextNode('Los mejores WOLOLO'));

//Elemento anterior será reemplazado
const anterior = document.querySelector('#encabezado');
//Elemento padre
const elPadre = document.querySelector('#lista-cursos');

//Reemplazar
elPadre.replaceChild(nuevoEncabezado, anterior);

console.log(nuevoEncabezado);

//QUITAR ELEMENTOS
const enlaces = document.querySelectorAll('.enlace');
const navegacion = document.querySelector('#principal');

navegacion.removeChild(enlaces[2]);
enlaces[0].remove();

//QUITAR ATRIBUTOS
const primerLi = document.querySelector('.enlace');

let elemento;
//obtener una clase de CSS
elemento = primerLi.className;
elemento = primerLi.classList.add('nueva-clase');
elemento = primerLi.classList.remove('nueva-clase');
elemento = primerLi.classList;

//leer 
elemento = primerLi.getAttribute('href');
primerLi.setAttribute('href', 'http://facebook.com');
elemento = primerLi;
primerLi.setAttribute('data-id', 20);
elemento = primerLi.hasAttribute('data-id');
primerLi.removeAttribute('data-id');
elemento = primerLi;
console.log(elemento);