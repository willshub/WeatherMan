var querystring = require('querystring');
var http = require('http');

// Normally, these API properties would come from an external configuration file
var host = 'api.wunderground.com';
var apiKey = 'b7e0740fa2e44281';
var conditions_template = '/conditions';
var q_template = "/q";
var return_template = ".json";

function weatherDetails() {

    console.log('in Weather JS 2');
    var weather =  {"cities" : [{"city": "Austin","state": "TX"},{"city": "Campbell","state": "CA"},{"city": "Timonium","state": "MD"},{"city": "Omaha","state": "NE"}, {"city": "Chennai","state": "TamilNadu"}]};

    return {title: "Todays Weather", weather: weather};
};

exports.weatherDetails = weatherDetails;


function performRequest(endpoint, method, query, data, success) {
    var dataString = JSON.stringify(data);
    var headers = {};

    if (method == 'GET') {
        endpoint += apiKey + conditions_template + q_template + query + return_template + querystring.stringify(data);
    }
    else {
        headers = {
            'Content-Type': 'application/json',
            'Content-Length': dataString.length
        };
    }

    console.log('Debugger - ' + host + "-" + endpoint + "-" + method + "-" + headers);
    var options = {
        host: host,
        path: endpoint,
        method: method,
        headers: headers
    };

    var req = http.request(options, function(res) {
        console.log('STATUS: ' + res.statusCode);
        console.log('HEADERS: ' + JSON.stringify(res.headers));
        res.setEncoding('utf-8');

        var responseString = '';

        res.on('data', function(data) {
            responseString += data;
        });

        res.on('end', function() {
            //console.log(responseString);
            var responseObject = JSON.parse(responseString);
            success(responseObject);
        });
    });

    req.on('error', function(e) {
        console.log('problem with request: ' + e.message);
    });

    req.write(dataString);
    req.end();
}


exports.performRequest = performRequest;