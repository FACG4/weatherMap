const http = require('http');
const router = require('./router');

const port = process.env.PORT || 5000;
const host = process.env.HOST || 'localhost';
<<<<<<< HEAD
=======

>>>>>>> 0546b765f755506729d2bd7373760f5fe2dfbbc3

const server = http.createServer(router);
server.listen(port,()=>{
  console.log(`Server running on ${host} Listening to port :${port}.`);
});
