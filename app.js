var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello New 
  	World");
});

app.listen(4000);