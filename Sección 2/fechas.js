//En JavaScript existe un objeto llamado Date
const diaHoy = new Date();
console.log(diaHoy);

let valor;
//Mes
valor = diaHoy.getMonth();
console.log(`Mes: ${valor}`);
//Día
valor = diaHoy.getDate();
console.log(`Día: ${valor}`);
//Año
valor = diaHoy.getFullYear();
console.log(`Año: ${valor}`);
//Minutes
valor = diaHoy.getMinutes();
console.log(`Minuto: ${valor}`);
//Horas 
valor = diaHoy.getHours();
console.log(`Hora: ${valor}`);
//Milisegundos desde 1970
valor = diaHoy.getTime();
console.log(`Milisegundos desde 1970: ${valor}`);
//Set full year
diaHoy.setFullYear(2016);
valor = diaHoy.getFullYear();
console.log(`Año 2016: ${valor}`)
//Fecha en específico con mes, día, año
let navidad = new Date('12-25-2020')
console.log(navidad);
