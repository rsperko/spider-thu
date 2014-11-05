var express = require("express");
var app = express();
var cors = require("cors");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

app.use(bodyParser()); 						// pull information from html in POST
app.use(cors());

var mongo_host = process.env.MONGODB_PORT_27017_TCP_ADDR || 'localhost';
var mongo_port = process.env.MONGODB_PORT_27017_TCP_PORT || '27017';
mongoose.connect('mongodb://' + mongo_host + ':' + mongo_port + '/spider-thu');

var Product = mongoose.model('Product', {name: String});

app.get("/api/", function(req, res) {
  Product.find(function(err, products) {
    res.send(products);
  })
});

app.post("/api/add", function(req, res) {
  var name = req.body.name;
  new Product({name: name}).save(function(err) {
    res.send();
  });
});

app.use(express.static('public'));

app.listen(3000);
