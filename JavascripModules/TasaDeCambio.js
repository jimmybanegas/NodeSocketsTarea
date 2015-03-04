/**
 * Created by Jimmy Banegas on 26/02/2015.
 */

var method = TasaDeCambio.prototype;

var request = require('request');
var qs = require('querystring');


function TasaDeCambio(){}

method.getTasaDeCambio = function(cambioDolar,callback){

    request('https://www.bac.net/exchangerate/showXmlExchangeRate.do?company=BCO', function (error, response, body) {
        if (!error && response.statusCode == 200) {

            var xmldoc = require('xmldoc');

            var document = new xmldoc.XmlDocument(body.trim());

            var books = document.childrenNamed("country");

            var honduras = books[3]

            cambioDolar = honduras.valueWithPath("saleRateUSD");

            callback(cambioDolar);
        }
    })

}




module.exports = TasaDeCambio

