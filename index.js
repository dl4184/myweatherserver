
var http = require('http');
var express = require('express');
var app = express();
var braintree = require("braintree");




// Hello World
app.get('/', function (req, res) {
  res.send('Hello World!')
})





//configurations
var gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: "ysrjqnrbr479fcn2",
  publicKey: "2w9wgg6b358yx3vg",
  privateKey: "17dacd6bfdced23ce41d8364ad1324b3"
});

//generating token
app.get("/client_token", function (req, res) {
  gateway.clientToken.generate({}, function (err, response) {
    res.send(response.clientToken);
  });
});

//
app.post("/checkout", function (req, res) {
  var nonceFromTheClient = req.body.payment_method_nonce;
  // Use payment method nonce here
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})