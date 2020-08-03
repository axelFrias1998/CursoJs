var a = 'a';
let b = 'b';
const c = 'c';

//Scope de la función
function funcionScope(){
    var a = 'A';
    let b = 'B';
    const c = 'C';
    console.log('Función: ' + a, b, c);
}
funcionScope();
//Scope de bloque
if(true){
    var a = 'AA';
    let b = 'BB';
    const c = 'CC';
    console.log('BLOQUE: ' + a, b, c);
}

console.log('GLOBALES: ' + a, b, c);