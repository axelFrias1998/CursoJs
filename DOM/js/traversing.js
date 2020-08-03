const navegacion = document.querySelector('#principal');

console.log(navegacion.children[0].textContent = 'Nuevo enlace');

const barra = document.querySelector('.barra');

console.log(barra.children[0].children[0])

const cursos = document.querySelectorAll('.card');

console.log(cursos[0].lastElementChild);
console.log(cursos[0].childElementCount);

//PADRES
const enlaces = document.querySelectorAll('.card');

console.log(enlaces[0].parentElement.parentElement.parentElement.children[0].textContent = 'Hola desde traversing');
/*
Tipos de nodos
1 = Elementos
2 = Atributos
3 = Text node
8 = Comentarios
9 = Documentos
10 = Doctype
*/