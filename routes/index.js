var express = require('express');
var weather = require('./weather');
//var circle = require('./weather');
var router = express.Router();


/* *//*GET home page.*//*
router.get('/', function(req, res) {
    res.send('my ? home!');
  //res.render('index', { title: 'Express' });
});*/

router.get('/', function(req, res) {
    //console.log(req.query);
    res.render('index', {title: "Weather Man", age: "29"});
});


router.get('/weather', function(req, res) {
    console.log('in here');

    var response = weather.weatherDetails();
    res.render('list', response);
    //res.send(200)
});

router.get('/weather/:state/:city', function(req, res) {
    console.log(req.params);
    //res.send(req.params.city,200);
    var query = "/" + req.params.city + "/" + req.params.state;

    var weatherRes = weather.performRequest('/api/', 'GET',
        query , { }, function(data) {

        console.log('Fetched ' + data.current_observation.temperature_string + ' Temp');
        res.render('details', {title: "Weather Details for ", data: data});

    });
});

module.exports = router;
