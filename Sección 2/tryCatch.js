obtenerClientes();

//Función que no existe
try{
    algo();
} catch(error){
    console.log(error);
} finally {
    console.log('No le importa, ejecuta de todos modos');
}
obtenerClientes();

function obtenerClientes(){
    console.log('Descargando...');
    setTimeout(function(){
        console.log('Completo')
    }, 3000);
}