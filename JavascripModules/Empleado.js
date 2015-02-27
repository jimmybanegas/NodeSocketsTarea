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

method.getAge = function() {
    return this;
};

method.getNextCodigo=function(){
  return 1+3;
};


module.exports = Empleado;
