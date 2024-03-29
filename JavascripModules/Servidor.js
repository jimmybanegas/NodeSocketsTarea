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

        var opcion = (data.toString()).substring(0, (data.toString()).indexOf("{"));

        if(data.toString().length>opcion.length)
             var obje= (data.toString()).substring(opcion.length,(data.toString()).length);

        if(opcion=='Guardar'){
            var parsedObj = JSON.parse(obje);
            if(!arch.esRepetido(parsedObj._codigo &&
                !arch.esRepetido(parsedObj._telefono
                 &&arch.esRepetido(parsedObj._identidad)
                && arch.esRepetido(parsedObj._correo)))){
                arch.escribirArchivo(obje)
            }

        }
        else if(opcion=='Buscar'){
            var parsedObj = JSON.parse(obje);
            var emp =arch.buscar(parsedObj.codigo)
                socket.write(emp);
                socket.pipe(socket);
        }
        else if(opcion=='Listar'){
            var emp =arch.listar()
            socket.write(emp);
            socket.pipe(socket);
        }
        else if(opcion=='Modificar'){
            var parsedObj = JSON.parse(obje);
            var emp =arch.buscar(parsedObj._codigo)
            console.log(emp)
            console.log(obje)

            if(!arch.esRepetido(!arch.esRepetido(parsedObj._telefono
                &&arch.esRepetido(parsedObj._identidad)
                && arch.esRepetido(parsedObj._correo)))) {
                arch.editar(emp, obje)
            }
        }
        var parsedObj = JSON.parse(obje);

    });
})
    .listen(8888);
console.log("Conectado correctamente");
