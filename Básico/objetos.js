/*const persona = {
    nombre: 'Axel',
    apellido: 'Frías Hernández',
    email: 'axel.frias257@gmail.com',
    edad: 20,
    sexo: false,
    musica: ['Perreo', 'Trance', 'Trap'],
    hogar: {
        pais: 'México',
        ciudad: 'Ciudad de México'
    },
    anioNacimiento: function(){
        return new Date().getFullYear() - this.edad;
    }
};

console.log(persona);
console.log(persona.apellido);
persona.musica.push('Balada');
console.log(persona.musica[3]);
console.log(persona.hogar.ciudad);
console.log(persona.anioNacimiento());*/
const autos = [
    {modelo: 'Mustang', motor: 6.8 },
    {modelo: 'Camaro', motor: 6.3 },
    {modelo: 'Corvette', motor: 6.2 },
    {modelo: 'Charger', motor: 6.0 }
];

console.log(autos);
console.log(autos[2].modelo);

for (let i = 0; i < autos.length; i++) {
    console.log(`Auto ${i + 1}: 
    \tModelo: ${autos[i].modelo}
    \tMotor: ${autos[i].motor}`);  
}
