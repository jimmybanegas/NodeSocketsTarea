/**
 * Created by Jimmy Banegas on 26/02/2015.
 */


var method = Empleado.prototype;

function Empleado(codigo, nombre, email, sueldo, id, tel){
    this._codigo = codigo;
    this._nombre = nombre;
    this._correo = email;
    this._sueldo = sueldo;
    this._identidad = id;
    this._telefono = tel;
}

method.getNextCodigo=function(){
    var text = "";
    var lt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var nm = "0123456789"

    for( var i=0; i < 2; i++ )
        text += lt.charAt(Math.floor(Math.random() * lt.length));

    for( var i=0; i < 2; i++ )
        text += nm.charAt(Math.floor(Math.random() * nm.length));

    return text;
};


module.exports = Empleado;
