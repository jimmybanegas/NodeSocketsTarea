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
        ||parsedObj._identidad==parametro || parsedObj._correo==parametro){
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
           return array[i];
        }
    }
    return ' '
}

method.listar= function () {
    var fs = require('fs');
    var array = fs.readFileSync('Empleados.txt').toString().split("\n");
    var txt='';
    for(i in array) {
        if(array[i]!='')
             txt+=array[i]+'\n'
    }
   return txt
}

method.editar = function(anterior,nuevo){
    var fs = require('fs')
    fs.readFile('Empleados.txt', 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }

        var result = data.replace(anterior, nuevo);

        fs.writeFile('Empleados.txt', result, 'utf8', function (err) {
            if (err) return console.log(err);
        });
    });
}

module.exports = Archivos;