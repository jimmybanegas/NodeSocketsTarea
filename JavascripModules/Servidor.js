/**
 * Created by Jimmy Banegas on 26/02/2015.
 */
var net = require('net'),
    JsonSocket = require('json-socket');

var Empleado = require("./Empleado.js");


require('net').createServer(function (socket) {
    console.log("connected");



    socket.on('data', function (data) {
        console.log(data.toString());
    });
})
    .listen(8888);
console.log("Conectado correctamente");
