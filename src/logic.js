const fs = require("fs");
const path = require("path");
const querystring = require("querystring");
const request = require("request");

const contentType = {
  html: "text/html",
  css: "text/css",
  jpg: "images/jpg",
  png: "images/png",
  ico: "images/ico",
  js: "text/javascript"
};

const displayIndex = (endpoint, res) => {
  const filePath = path.join(__dirname, "..", "public", endpoint);
  const fileExtention = endpoint.split(".")[1];
  res.writeHead(200, {
    "Content-Type": `${contentType[fileExtention]}`
  });
  fs.readFile(filePath, (error, file) => {
    if (error) {}
    res.end(file);
  });
};

const recieveValue = (req, res) => {
  let reqData = "";
  req.on("data", chunk => {
    reqData += chunk;
  });
  req.on('end', () => {
    requestApi(reqData.trim(), res);
  });
}

const requestApi = (cityName, res) => {
  var c = cityName.replace(/["]+/g, '');
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${c}&appid=2baf5cca8050b30e4173d7f0bd33c054`;
  request.get(url, (err, resp, body) => {
    var sth = JSON.parse(body);
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    res.end(JSON.stringify(sth));
  });
};

module.exports = {
  displayIndex,
  recieveValue,
  reciveLangLat,
  findCity
};
