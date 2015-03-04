/**
 * Created by Jimmy Banegas on 26/02/2015.
 */

var request = require('request');
var qs = require('querystring');
request('https://www.bac.net/exchangerate/showXmlExchangeRate.do?company=BCO', function (error, response, body) {
    if (!error && response.statusCode == 200) {


        var json = JSON.stringify(body); //returns a string containing the JSON structure by default



        console.log(json);



    }
})
