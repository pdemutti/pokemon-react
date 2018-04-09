'use strict';

const http    = require('http');
const express = require('express');
const app     = express();
  
app.use(express.static('./public'));

http.createServer(app).listen(process.env.PORT || 3000, function(){
  console.log('Server runing 3000');
});
