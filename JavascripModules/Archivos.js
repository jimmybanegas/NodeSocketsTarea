/**
 * Created by Jimmy Banegas on 26/02/2015.
 */

var method = Archivos.prototype;


function Archivos(){}

fs = require('fs');

method.escribirArchivo = function(empleado){
    fs.appendFile('Empleados.txt', empleado+'\r\n', function (err) {
        if (err) return console.log(err);

    });
}

method.esRepetido= function (parametro) {
    var fs = require('fs');
    var array = fs.readFileSync('Empleados.txt').toString().split("\n");
    for(i in array) {
        var parsedObj = JSON.parse(array[i]);
        if(parsedObj._codigo==parametro || parsedObj._telefono==parametro
        ||parsedObj._identidad==parametro){
            return true;
        }
    }
    return false
}

method.buscar = function (codigo) {
    var fs = require('fs');
    var array = fs.readFileSync('Empleados.txt').toString().split("\n");
    for(i in array) {
        var parsedObj = JSON.parse(array[i]);
        if(parsedObj._codigo==codigo){
           return parsedObj;
        }
    }
    return ''
}

method.listar= function () {
    var fs = require('fs');
    var array = fs.readFileSync('Empleados.txt').toString().split("\n");
   return array
}

method.editar = function(anterior,nuevo){
    var fs = require('fs');

    var array = fs.readFileSync('Empleados.txt').toString().split("\n");
    for(i in array) {

       array[i].replace(/anterior/gi,nuevo)
    }
    return false
}

module.exports = Archivos;