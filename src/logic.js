const fs = require('fs');
const path = require('path');
const querystring = require('querystring');
const request = require('request');


const contentType = {
  html: 'text/html',
  css: 'text/css',
  jpg: 'images/jpg',
  png: 'images/png',
  ico: 'images/ico',
  js: 'text/javascript'
}

const displayIndex = (endpoint, res) => {
  const filePath = path.join(__dirname, '..', 'public', endpoint);
  const fileExtention = endpoint.split('.')[1];
  res.writeHead(200, {
    'Content-Type': `${contentType[fileExtention]}`
  });
  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log(error);
    }
    res.end(file);
  });
}

const recieveValue = (req, res) => {
  let reqData = '';
  req.on('data', (chunk) => {
    reqData += chunk;
  });
  req.on('end', () => {
    const convertedReqData = reqData;
    requestApi(convertedReqData.trim() , res);
  });
  // res.writeHead(302, {
  //   Location: `http://${req.headers.host}/`
  // });
  // res.end();
}

const requestApi = (cityName ,res) => {
  console.log('cityName', cityName);
  var c =cityName.replace(/["]+/g, '');
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${c}&appid=2baf5cca8050b30e4173d7f0bd33c054`;
  console.log(url);
  request.get(url, (err, resp, body) => {
    var json = JSON.parse(body);
    var result = {
      description: json.weather[0].description,
      measurment: json.main
    };
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(result));
    console.log(json);
  });
}



module.exports = {
  displayIndex,
  recieveValue
};
