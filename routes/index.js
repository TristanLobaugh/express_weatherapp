var express = require('express');
var router = express.Router();
var http = require("http");
var request = require("request");
var body;

/* GET home page. */
router.get('/', function(req, res, next) {

	var apikey = 'e312dbeb8840e51f92334498a261ca1d';
	var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=Seattle&units=imperial&APPID="+apikey;

	request.get(weatherUrl,function(error,response,body){
		console.log(body);
		body = JSON.parse(body);
		iconHTML = 'http://openweathermap.org/img/w/' + body.weather[0].icon + '.png';
		res.render("index", {body: body, icon: iconHTML});
	});

	

	// var weatherRequest = http.get(weatherUrl, function(response){
	// 	if(response.statusCode == 200){
	// 		body = "";
	// 		response.on("data", function(dataChunk){
	// 			body += dataChunk;
	// 		});
	// 		response.on("end", function(){
	// 			console.log(body);
	// 			body = JSON.parse(body);
	// 			 res.render('index', { body: body });
	// 		})
	// 	}
	// });
});

module.exports = router;
