const fs = require('fs');

//LEER UN ARCHIVO (texto.txt)

// archivo = fs.readFileSync('./texto.txt');
// console.log(archivo);

// LEER UN ARCHIVO DE MANERA ASINCRONA
var archivo;
fs.readFile('./err.txt',(err, data) => {
    //console.log(data);
    archivo = data;
    console.log(err);
    console.log(archivo);
});

console.log(archivo);
