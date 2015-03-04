/**
 * Created by Jimmy Banegas on 26/02/2015.
 */


var method = OpcionesDeMenu.prototype;

var Empleado = require("./Empleado.js")
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

        var c = new Cliente()

        console.log(userString)

        var client = c.iniciarCliente()

        client.write('Guardar' + userString)

    });
}

method.buscar = function(){
    prompt.start();

    prompt.get(propertiesBuscar, function (err, result) {
        if (err) { return onErr(err); }
        var c = new Cliente()

        var userString = JSON.stringify(result);

        var client = c.iniciarCliente()        //console.log(userString)

        client.write('Buscar' + userString)

        client.on('data', function(data) {
            console.log('Received: ' + data);
            client.destroy(); // kill client after server's response
        });
    });
}

method.listar = function(){
    var c = new Cliente()
    var client = c.iniciarCliente()        //console.log(userString)

    client.write('Listar'+'{}')

    client.on('data', function(data) {
        var array = data.toString().split('\n')
        for(i in array) {
           // var parsedObj = JSON.parse(array[i]);
            if(array[i]!=''){
                var parsedObj = JSON.parse(array[i]);
                console.log(parsedObj._codigo+' '+parsedObj._nombre+'       '+parsedObj._correo+
                '       '+parsedObj._identidad+ '    '+parsedObj._telefono+ '    '+parsedObj._sueldo)
            }
        }
        client.destroy(); // kill client after server's response
    });
}

method.tasas = function(){

}

method.modificar = function(codigo){
    prompt.start();
    prompt.get(propertiesModificar, function (err, result) {
        if (err) { return onErr(err); }

        var emp = new Empleado(result.codigo,result.NuevoNombre,result.NuevoCorreo,result.NuevoSalario,
                  result.NuevaIdentidad,result.NuevoTelefono)

        var userString = JSON.stringify(emp);

        var c = new Cliente()

        var client = c.iniciarCliente()

        client.write('Modificar' + userString)

        client.on('data', function(data) {
            console.log( + data);
            client.destroy(); // kill client after server's response
        });

    });

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
        name: 'codigo'
    },
    {
        name: 'NuevoNombre',
        validator: /^[A-Za-záéíóúñ]{2,}([\s][A-Za-záéíóúñ]{2,})+$/
    },
    {
        name: 'NuevoCorreo',
        validator: /^[(a-z0-9\_\-\.)]+@[(a-z0-9\_\-\.)]+\.[(a-z)]{2,4}$/
    },
    {
        name: 'NuevoSalario',
        validator: /[+-]?\d+(\.\d+)?/
    },
    {
        name: 'NuevaIdentidad',
        validator: /^[0-9]{13}$/
    },
    {
        name: 'NuevoTelefono',
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