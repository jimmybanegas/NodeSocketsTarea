/**
 * Created by Jimmy Banegas on 26/02/2015.
 */


var method = OpcionesDeMenu.prototype;


var Empleado = require("./Empleado.js")
var Menu = require("./Menu.js")
var Cliente = require("./Cliente.js")

function OpcionesDeMenu(){}

var prompt = require('prompt');

method.agregar =  function(){
    prompt.start();


    return prompt.get(propertiesAgregar, function (err, result) {
        if (err) {
            return onErr(err);
        }

        var emp= new Empleado()

        var cod= emp.getNextCodigo()

         emp._codigo=cod
         emp._nombre= result.nombre
         emp._correo=result.correo
         emp._sueldo= result.salario
         emp._identidad=result.identidad
         emp._telefono=result.telefono

        var userString = JSON.stringify(emp);

        console.log(userString)

        var c = new Cliente()

        var client = c.iniciarCliente()

        client.write('Guardar' + userString)

    });
}

method.buscar = function(){
    prompt.start();

    prompt.get(propertiesBuscar, function (err, result) {
        if (err) { return onErr(err); }
        console.log('Command-line input received:');
        console.log('  Username: ' + result.username);
    });
}

method.listar = function(){
    prompt.start();

    return prompt.get(propertiesAgregar, function (err, result) {
        if (err) { return onErr(err); }
        console.log('Command-line input received:');
        console.log('  Username: ' + result.username);
        console.log('  Password: ' + result.password);
    });

}

method.tasas = function(){

}

method.modificar = function(codigo){
    prompt.start();

    prompt.get(propertiesModificar, function (err, result) {
        if (err) { return onErr(err); }
        console.log('Command-line input received:');
        console.log('  Username: ' + result.username);
        console.log('  Password: ' + result.password);
    });

    return prompt;
}


var propertiesAgregar = [
    {
        name: 'nombre',
        validator: /^[A-Za-záéíóúñ]{2,}([\s][A-Za-záéíóúñ]{2,})+$/
    },
    {
        name: 'correo',
        validator: /^[(a-z0-9\_\-\.)]+@[(a-z0-9\_\-\.)]+\.[(a-z)]{2,4}$/
    },
    {
        name: 'salario',
        validator: /[+-]?\d+(\.\d+)?/
    },
    {
        name: 'identidad',
        validator: /^[0-9]{13}$/
    },
    {
        name: 'telefono',
        validator: /^[0-9]{8}$/
    },

];

var propertiesBuscar = [
    {
        name: 'codigo'
    }
];

var propertiesModificar = [
    {
        name: 'nombre',
        validator: /^[A-Za-záéíóúñ]{2,}([\s][A-Za-záéíóúñ]{2,})+$/
    },
    {
        name: 'correo',
        validator: /^[(a-z0-9\_\-\.)]+@[(a-z0-9\_\-\.)]+\.[(a-z)]{2,4}$/
    },
    {
        name: 'salario',
        validator: /[+-]?\d+(\.\d+)?/
    },
    {
        name: 'identidad',
        validator: /^[0-9]{13}$/
    },
    {
        name: 'telefono',
        validator: /^[0-9]{8}$/
    }
];


function onErr(err) {
    return 1;
}

function onExit() {
    return 0;
}

module.exports = OpcionesDeMenu