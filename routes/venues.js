require('dotenv').load();

var express = require('express');
var router = express.Router();
var https = require('https');
var request = require('request');

/* GET venues listing. */
router.get('/', function(req, res, next) {
  console.log(process.env.clientId);
  console.log(process.env.clientSecret);
  res.send('venues page');
});

router.get('/:near', function(req, res, next){

  var search = 'https://api.foursquare.com/v2/venues/search?near=' + req.params.near +  '&client_id=' + process.env.clientId + '&client_secret=' + process.env.clientSecret + '&v=20151121';

  var venues = function(){
    request(search, function(err, res, body){
    if (err){
      console.error(err);
      }
    })
    .pipe(res)
    .on('error', function(err){
      console.error(err);
    });
  };
  venues();
});

module.exports = router;



