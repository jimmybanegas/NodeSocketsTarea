/**
 * Created by Jimmy Banegas on 26/02/2015.
 */

var net = require('net'),
    JsonSocket = require('json-socket');

var Empleado = require("./Empleado.js");

var emp= new Empleado(01,"Jimmy","j.ramos@unitec.edu",1500,"1806199300498",94621230)

var port = 9838; //The same port that the server is listening on
var host = '127.0.0.1';
var socket = new JsonSocket(new net.Socket()); //Decorate a standard net.Socket with JsonSocket
socket.connect(port, host);
socket.on('connect', function() { //Don't send until we're connected
    socket.sendMessage({a: 5, b: 7});
    socket.on('message', function(message) {

        console.log(emp.getNextCodigo());
        console.log(emp._codigo);
        console.log(emp._sueldo)
        console.log('The result is: '+message.result);

    });
});