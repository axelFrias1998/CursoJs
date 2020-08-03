/*Event listener click buscador
document.querySelector('#submit-buscador').addEventListener('click', ejecutarBoton);

function ejecutarBoton(e){
    e.preventDefault();

    let elemento; 
    elemento = e;
    elemento = e.target;
    elemento = e.target.id;
    elemento = e.target.className;
    elemento = e.target.innetText;

    console.log(elemento);
}

document.querySelector('#encabezado').addEventListener('click', function(e){
    e.target.innerText = 2 + 2;
});*/

//Variables

const encabezado = document.querySelector('#encabezado');
const enlaces = document.querySelectorAll('.enlace');
const boton = document.querySelector('#vaciar-carrito');
const busqueda = document.querySelector('#buscador');

//Key down
//busqueda.addEventListener('keydown', obtenerEvento);
//Key up
//busqueda.addEventListener('keyup', obtenerEvento);
//Key press
//busqueda.addEventListener('keypress', obtenerEvento);
//Key focus -> Seleccionado
//busqueda.addEventListener('focus', obtenerEvento);
//Blur -> cuando quita selección
//busqueda.addEventListener('blur', obtenerEvento);
//Cut
//busqueda.addEventListener('cut', obtenerEvento);
//Copy
//busqueda.addEventListener('copy', obtenerEvento);
//Paste
//busqueda.addEventListener('paste', obtenerEvento);
//Input
//busqueda.addEventListener('input', obtenerEvento);
//Change
//busqueda.addEventListener('change', obtenerEvento);

//Click
//boton.addEventListener('click', obtenerEvento);
//Doble click
//boton.addEventListener('dblclick', obtenerEvento);
//Mouse Enter
//boton.addEventListener('mouseenter', obtenerEvento);
//Mouse leave
//boton.addEventListener('mouseleave', obtenerEvento);
//Mouse Over
//boton.addEventListener('mouseover', obtenerEvento);
//Mouse Out
//boton.addEventListener('mouseout', obtenerEvento);
//Mouse Down
//boton.addEventListener('mousedown', obtenerEvento);
//Mouse Up
//boton.addEventListener('mouseup', obtenerEvento);
//Mouse Move
//boton.addEventListener('mousemove', obtenerEvento);


//Event bubbling
const card = document.querySelector('.card');
const infoCurso = document.querySelector('.info-card');
const agregarCarrito = document.querySelector('.agregar-carrito');

card.addEventListener('click', function(e){
    e.stopPropagation();
    console.log('Click en Card')
});
infoCurso.addEventListener('click', function(e){
    e.stopPropagation();
    console.log('Click en Info curso')
});
agregarCarrito.addEventListener('click', function(e){
    e.stopPropagation();
    console.log('Click en Agregar carrito')
});
function obtenerEvento(e){
    //document.querySelector('#encabezado').innerText = busqueda.value;
    console.log(`Evento ${e.type}`);
}