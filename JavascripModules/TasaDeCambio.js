/**
 * Created by Jimmy Banegas on 26/02/2015.
 */

var request = require('request');
var qs = require('querystring');
request('https://www.bac.net/exchangerate/showXmlExchangeRate.do?company=BCO', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        // Show the HTML for the Google homepage.

        var xmldoc = require('xmldoc');

        var document = new xmldoc.XmlDocument(body);

        var nameNode = xmldoc.descendantWithPath("country.name");


        console.log(nameNode)

    }
})
