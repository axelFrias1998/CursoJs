//Agregar a local Storage
localStorage.setItem('nombre', 'Axel');

//Session Storage
sessionStorage.setItem('nombre', 'Axel');

//Eliminar local storage
localStorage.removeItem('nombre');

const nombre = localStorage.getItem('nombre');

//Limpiar storage
localStorage.clear();