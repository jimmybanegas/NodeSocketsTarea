/**
 * Created by Jimmy Banegas on 26/02/2015.
 */
var net = require('net')
var Archivo = require("./Archivos.js")
var Empleado = require("./Empleado.js");


require('net').createServer(function (socket) {
    console.log("connected");
    socket.on('data', function (data) {
        var arch= new Archivo();
       // console.log(data.toString());

        var opcion = (data.toString()).substring(0, (data.toString()).indexOf("{"));

        var obje= (data.toString()).substring(opcion.length,(data.toString()).length);

        console.log(opcion)

        if(opcion=='Guardar'){
            arch.escribirArchivo(obje)
            var l = arch.buscar('020')
            var l2= arch.buscar('520')
            arch.editar(l,l2)

        }
        else if(opcion=='Buscar'){

        }
        else if(opcion=='Listar'){

        }
        else if(opcion=='Modificar'){

        }

        var parsedObj = JSON.parse(obje);

    });
})
    .listen(8888);
console.log("Conectado correctamente");
