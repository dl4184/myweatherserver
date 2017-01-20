'use strict'

const Hapi = require('hapi')
const Inert = require('inert')

const Server = new Hapi.Server()

Server.connection({ port: process.env.PORT || 3000 })

Server.register(Inert, (err) => {
  if (err) throw err

  Server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
      reply.send('Hello World!')
    }
  })
})

Server.start((err) => {
  if (err) throw err
  console.log(`Server running at: ${Server.info.uri}`)
})



///var braintree = require("braintree");










//configurations
/*var gateway = braintree.connect({
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
});*/
