var request = require ("jasmine")
request({
   url: 'http://api.geonames.org/weatherJSON',
   qs: {username: 'aliangel2004', formatted: true, north: 44.1, south: -9.9, east: -22, west: 55.2, style: "full"}, 
   method: 'POST',
}, function(error, response, body){
   if(error) {
       console.log(error);
   } else {
       console.log(response.statusCode, body);
   }
});