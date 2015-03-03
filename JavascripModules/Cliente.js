/**
 * Created by Jimmy Banegas on 26/02/2015.
 */


var method = Cliente.prototype;

function Cliente(){}

method.iniciarCliente = function(){
    var s = require('net').Socket();
    s.connect(8888);
    return s;
}


module.exports = Cliente