var mongojs = require('mongojs');
var dbConfig = require('./config');

const dbReaction = dbConfig.default.db;
const collection = dbConfig.default.Empresa;

const users = dbConfig.default.users;

const db = mongojs(dbReaction, [collection]);
const dbUsers = mongojs(dbReaction, [users]);

const NO_VALIDADA = 'No Resuelta';
const VALIDADA = 'Resuelta';
const NO_AUTENTICADA = 'No Autenticada';
const AUTENTICADA = 'Autenticada';

module.exports = app => {

  app.get('/' + collection, (req, res) => {

    console.log(collection);

    db.Empresa.find((err, Empresa) => {

      res.json({
        Empresa
      });

    });

  });

  app.get('/' + collection + '/:id', (req, res) => {

    console.log(collection + ': get one by id: ' + req.params.id);

    if(req.params.id === undefined) {

      db.Empresa.findOne((err, Empresa) => {
  
        res.json({
          Empresa
        });
  
      });

    } else {

      //TODO: la empresa se deberia buscar por su id, no por idUser.
      //cambiar eso
      /*
      db.Empresa.findOne({

        _id: mongojs.ObjectId(req.params.id)
  
      }, (err, Empresa) => {
  
        res.json({
          Empresa
        });
  
      });
      */

      db.Empresa.findOne({

        idUser: req.params.id

      }, (err, Empresa) => {

        res.json({
          Empresa
        });

      });

    }

  });

  app.post('/' + collection, (req, res) => {

    console.log('post in: Empresa');

    setTimeout(() => {

      dbUsers.users.findOne({

        "emails.address": req.body.request.data.Empresa.email
  
      }, (err, user) => {
  
        db.Empresa.findOne({
  
          idUser: user._id
    
        }, (err, empresa) => {
    
          let newEmpresa = empresa;
    
          if(empresa != null) {
    
            res.json({
                Empresa: newEmpresa
            });
    
          } else {
    
            newEmpresa = {
    
              nombre: 'nombre',
              razonSocial: 'razon social',
              cuit: 'cuit',
              domicilio: 'domicilio',
              telefono: 'telefono',
              logo: 'ruta a la imagen del logo',
              usuario: 'nombre de usuario, esto lo tiene reaction',
              clave: 'esto lo tiene reaction',
              email: req.body.request.data.Empresa.email,
              localidad: 'localidad',
              provincia: 'provincia',
              estado: NO_VALIDADA,
              rubros: ["Sin Rubros"],
              idUser: user._id
                
            };
  
            db.Empresa.insert(newEmpresa, (err, Empresa) => {
    
              res.json({
                  response: {
                    data: {
                      Empresa
                    }
                  }
              });
    
            });
    
          }
    
        });
  
      });

    }, 5000);

  });

  app.put('/' + collection + '/:id', (req, res) => {

    console.log('put in: empresa');
    
    db.Empresa.findAndModify({
      query: {_id: mongojs.ObjectId(req.params.id)} ,
      update: { 
        $set: {
          "estado" : req.body.request.data.Empresa.estado || "No Validada",
          "rubros" : req.body.request.data.Empresa.rubros || ["Sin Rubros"]
        } 
      },
      new: true
    }, (err, Empresa, lastErrorObject) => {

      res.json({
        Empresa
      });

    });

  });

  app.delete('/' + collection + '/:id', (req, res) => {

    db.Empresa.remove({

      _id: mongojs.ObjectId(req.params.id)

    }, (err, response) => {

      res.json({
        response
      });

    });

  });

};