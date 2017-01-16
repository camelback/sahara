var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello New 5 World");
});

app.listen(4000);