import axios from 'axios';

module.exports = app => {

  app.get('/', (req, res) => {

    console.log('API Work!');
    
    res.json({
      response: 'API Work!'
    });

  });

  app.get('/asd/:razon', (req, res) => {

    console.log('laradock!');

    var url = 'http://172.22.0.7/validar/razon/' + req.params.razon;

    axios.get(url).then(function (response) {
        console.log(response.data);
        console.log('API Work en 172.22.0.7!');
        res.json({
          response: response.data
        });
    }).catch(function (error) {
      console.log(error);
    }).finally(function () {
      console.log('hizo el fetch en 172.22.0.7');
    });

  });
    
};