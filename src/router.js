const handlers = require('./logic');

const router = (req, res)=>{
  const endpoint = req.url;
  let endpointArray=['/','/css/style.css','/js/logic.js','/js/index.js','/img/icon.png'];

  if (endpoint === '/'){
    handlers.displayIndex('/index.html', res);
  }
  else if (endpoint === '/city'){
    handlers.recieveValue(req, res);
}else if(endpoint === '/search'){
  handlers.reciveLangLat(req, res);
}else if(endpointArray.includes(endpoint)){
  handlers.displayIndex(endpoint, res);

}
  else {
    handlers.displayIndex('/error.html', res);
  }
}

module.exports = router;
