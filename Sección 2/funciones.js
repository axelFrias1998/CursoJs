//Function declaration

function saludar(nombre = 'visitante'){
    console.log(`Hola, ${nombre}`);
}
saludar('Axel');
saludar('Mariana');
saludar('Giselle');
saludar();

function sumar(a, b){
    
    console.log(a + b);
}
sumar(2, 3);
sumar(421, 212);

function restar(a, b){
    return a - b;
}
console.log(restar(5, 2));

//Function expression
const suma = function(a = 0, b = 0){
    return a + b;
}

console.log(suma(1));

//IIFE
(function (tecnologia) {
    console.log(`Aprendiendo ${tecnologia}`)
})('Javascript');

//Métodos de propiedad
//Cuando una función se pone dentro de un objeto
const musica = {
    reproducir: function(cancion){
        console.log(`Reproduciendo ${cancion}`)
    },
    pausar: function(cancion) {
        console.log(`Pausando ${cancion}`)
    }
};
musica.reproducir('PPP');
musica.pausar('Candy');

//Los métodos también pueden guardarse fuera de un objeto
musica.borrar = function(cancion){
    console.log(`Borrando ${cancion}`);
};
musica.borrar('Soltera');