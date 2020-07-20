//Comprobar que variable tiene un valor

let puntaje = 1000;
if(typeof puntaje != 'undefined'){
    console.log(`El puntaje fue de ${puntaje}`);
}
else{
    console.log('No hay puntaje');
}

let efectivo = 600;
let credito = 300, disponible = efectivo + credito;
let totalCarrito = 500;

if(totalCarrito < efectivo || totalCarrito < credito){
    console.log('Puedo pagar');
}
else{
    console.log('No puedo pagar')
}

let hora = 20;

if(hora > 0 && hora <= 10)
    console.log('Buenos días');
else if(hora > 10 && hora <= 18)
    console.log('Buenas tardes');
else if(hora > 18 && hora <= 24)
    console.log('Buenas noches');
else
    console.log('Hora no válida');

//Ternario
const logueado = true;
console.log(logueado === true ? 'Sí se logueó' : 'No se logueó');

//Switch
const metodoPago = 'Efectivo';
switch(metodoPago){
    case 'Efectivo':
        console.log(`El usuario pagó con ${metodoPago}`);
        break;
    case 'Cheque':
        console.log(`El usuario pagó con ${metodoPago}`);
        break;
    case 'Tarjeta':
        console.log(`El usuario pagó con ${metodoPago}`);
        break;
    default:
        console.log(`El usuario pagó con ${metodoPago}`);
        break;
}

let mes;
switch(new Date().getMonth()){
    case 0:
        mes = 'Enero';
        break;
    case 1:
        mes = 'Febrero';
        break;
    case 2:
        mes = 'Marzo';
        break;
    case 3:
        mes = 'Abril';
        break;
    case 4:
        mes = 'Mayo';
        break;
    case 5:
        mes = 'Junio';
        break;
    case 6:
        mes = 'Julio';
        break;
    case 7:
        mes = 'Agosto';
        break;
    case 8:
        mes = 'Septiembre';
        break;
    case 9:
        mes = 'Octubre';
        break;
    case 10:
        mes = 'Noviembre';
        break;
    case 11:
        mes = 'Diciembre';
        break;
}
console.log(`El mes es: ${mes}`)

