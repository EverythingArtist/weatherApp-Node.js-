const request = require('request');


var getWeather = (lat, long, callback) =>{


  request({
    url: `https://api.darksky.net/forecast/10cdb2798b62ac479bcb59272d0cd069/${lat},${long}`,
    json: true
  }, (error, response, body) => {
    if(error){
      callback('unable to connect to frocast.io server');
    }else if(response.statusCode === 404){
  callback('unable to fetch weather');
    }else if(response.statusCode === 200){
      callback(undefined, {
// console.log(body.currently.temperature)
temperature: body.currently.temperature,
apparentTemperature: body.currently.apparentTemperature,
      });

  }
  });
};

module.exports.getWeather = getWeather;
