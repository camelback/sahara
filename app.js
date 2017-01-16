var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello New 2 World");
});

app.listen(4000);