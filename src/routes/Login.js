var mongojs = require('mongojs');
var dbConfig = require('./config');

module.exports = app => {

  app.post('/login', (req, res) => {

    //console.log(req.body);

    var email = req.body.request.data.email;
    var pass = req.body.request.data.pass;

    res.json({
      request: {
        exist: true,
        passValid: true,
        empresaValida: true
      }
    });

  });

  app.post('/updatetoken', (req, res) => {

    console.log(req.body.request.data.token);

    res.json({
      request: {
        status: 200,
        data: {
            token: 'token updated'
        }
      }
    });

  });

};