/**
 * Created by Jimmy Banegas on 26/02/2015.
 */


var method = OpcionesDeMenu.prototype;

var Empleado = require("./Empleado.js")

var Menu = require("./Menu.js")

function OpcionesDeMenu(){

}

var prompt = require('prompt');

method.agregar =  function(){
    prompt.start();

    prompt.get(propertiesAgregar, function (err, result) {
        if (err) { return onErr(err); }

        var emp = new Empleado(result.codigo,result.nombre,result.correo,
                               result.salario,result.identidad,result.telefono)

        var userString = JSON.stringify(emp);

        console.log(userString)

        prompt.end()
    })
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

    prompt.get(propertiesAgregar, function (err, result) {
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
}


var propertiesAgregar = [
    {
        name: 'codigo'
    },
    {
        name: 'nombre',
        validator: /^[A-Za-záéíóúñ]{2,}([\s][A-Za-záéíóúñ]{2,})+$/,
        warning: 'Nombre no válido'
    },
    {
        name: 'correo',
        validator: /^[(a-z0-9\_\-\.)]+@[(a-z0-9\_\-\.)]+\.[(a-z)]{2,4}$/,
        warning: 'Correo no válido'
    },
    {
        name: 'salario',
        validator: /[+-]?\d+(\.\d+)?/,
        warning: 'Salario no válido'
    },
    {
        name: 'identidad',
        validator: /^[0-9]{13}$/,
        warning: 'Identidad no válida'
    },
    {
        name: 'telefono',
        validator: /^[0-9]{8}$/,
        warning: 'Telefono no válido'
    }
];

var propertiesBuscar = [
    {
        name: 'codigo'
    }
];

var propertiesModificar = [
    {
        name: 'nombre',
        validator: /^[A-Za-záéíóúñ]{2,}([\s][A-Za-záéíóúñ]{2,})+$/,
        warning: 'Nombre no válido'
    },
    {
        name: 'correo',
        validator: /^[(a-z0-9\_\-\.)]+@[(a-z0-9\_\-\.)]+\.[(a-z)]{2,4}$/,
        warning: 'Correo no válido'
    },
    {
        name: 'salario',
        validator: /[+-]?\d+(\.\d+)?/,
        warning: 'Salario no válido'
    },
    {
        name: 'identidad',
        validator: /^[0-9]{13}$/,
        warning: 'Identidad no válida'
    },
    {
        name: 'telefono',
        validator: /^[0-9]{8}$/,
        warning: 'Telefono no válido'
    }
];


function onErr(err) {
    return 1;
}

function onExit() {
    return 0;
}

module.exports = OpcionesDeMenu