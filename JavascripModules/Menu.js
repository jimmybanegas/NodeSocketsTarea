/**
 * Created by Jimmy Banegas on 26/02/2015.
 */

var OpcionesDeMenu = require("./OpcionesDeMenu.js");
var Cliente = require("./Cliente.js");



var op = new  OpcionesDeMenu()

var s = new Cliente();

var readline = require('readline'),
    rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt("    1.Insertar Empleado\n" +
"    2.Modificar Empleado\n" +
"    3.Buscar Empleado\n" +
"    4.Listar\n" +
"    5.Salir\n" +
"    Ingrese su opcion> ");
rl.prompt();

rl.on('line', function(line) {
    switch(line.trim()) {
        case '1':
            op.agregar()
            break;
        case '2':
            op.modificar()
            break;
        case '3':
            op.buscar()
            break;
        case '4':
            op.listar()
            break;
        case '5':
            process.exit(0)
            break;
    }
}).on('close', function() {
    console.log('Have a great day!');
    process.exit(0);
});

