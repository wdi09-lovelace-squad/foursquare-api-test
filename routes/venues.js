var express = require('express');
var router = express.Router();
var https = require('https');
var request = require('request');

/* GET venues listing. */
router.get('/', function(req, res, next) {
  res.send('venues page');
});

var clientId = 'D3XCQHVESV4KMC2KTYCEKXRYE11U4FZOKPKDLYPZBAZPQE0D';
var clientSecret = 'TJ1HYBNMZ0MVMA21Z4YVIOT4G3DOALEGFNHLPN4AOY5NPWG5';

router.get('/:near', function(req, res, next){

  var search = 'https://api.foursquare.com/v2/venues/search?near=' + req.params.near +  '&client_id=' + clientId + '&client_secret=' + clientSecret + '&v=20151121';

  var venues = function(){
    request(search, function(err, res, body){
    if (err){
      console.error(err);
    }
      console.log(JSON.stringify(body));
      return JSON.stringify(body);
    })
    .pipe(res)
    .on('error', function(err){
      console.error(err);
    });
  };
  res.end(venues());

});



module.exports = router;



