require('dotenv').load();

var express = require('express');
var router = express.Router();
var https = require('https');
var request = require('request');


/* GET venues listing. */
router.get('/', function(req, res, next) {
  res.send('venues page');
});

router.get('/:near', function(req, res, next){

  var search = 'https://api.foursquare.com/v2/venues/search?near=' + req.params.near +  '&client_id=' + process.env. + '&client_secret=' + clientSecret + '&v=20151121';

    // var options = req.query
    // var search = 'https://api.foursquare.com/v2/venues' + options +  '&client_id=' + clientId + '&client_secret=' + clientSecret + '&v=20151121';

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



