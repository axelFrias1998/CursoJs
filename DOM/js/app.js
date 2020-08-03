let elemento;
elemento = document;
elemento = document.all;
elemento = document.all(10);
elemento = document.body;
elemento = document.forms[0].id;
elemento = document.forms[0].className;
elemento = document.images[2].src;
elemento = document.scripts;
console.log(elemento);

let imagenes = document.images;
let imagenesArr = Array.from(imagenes);

imagenesArr.forEach(function(imagenes){
    console.log(imagenes.src)
});
console.log(imagenesArr);
// Eliminar de Local Storage
//localStorage.clear();