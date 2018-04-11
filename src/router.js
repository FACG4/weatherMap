const handlers = require('./logic');

const router = (req, res)=>{
  const endpoint = req.url;
  if (endpoint === '/'){
    handlers.displayIndex('/index.html', res);
  }
  else if (endpoint === '/city'){
    console.log('hi');
    handlers.recieveValue(req, res);
  // } else if (endpoint ==='/posts') {
  //   handlers.serveBlogs(res);
  // }
}
  else {
    handlers.displayIndex(endpoint, res);
    console.log(endpoint);
  }
}

module.exports = router;
