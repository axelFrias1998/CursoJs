const producto1 = 'Pizza', precio1 = 30, 
    producto2 = 'Hamburguesa', precio2 = 41;

let html;

/*
html = '<ul>' +
       '<li>Orden: ' + producto1 + '</li>' + 
       '<li>Precio: ' + precio1 + '</li>' +
       '<li>Orden: ' + producto2 + '</li>' +
       '<li>Precio: ' + precio2 + '</li>' +
       '<li>Total: ' + (precio2 + precio1) + '</li>' +
       '</ul>';
*/
html = `
    <ul>
        <li>Orden 1: ${producto1}</li>
        <li>Precio 1: $${precio1}</li>
        <li>Orden 2: ${producto2}</li>
        <li>Precio 2: $${precio2}</li>
        <li>Total: $${total(precio1, precio2)}</li>
    </ul>
`;

function total(precio1, precio2){
    return precio1 + precio2;
}
document.getElementById('app').innerHTML = html
