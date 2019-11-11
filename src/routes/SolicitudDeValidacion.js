var mongojs = require('mongojs');
var dbConfig = require('./config');

const dbReaction = dbConfig.default.db;
const collection = dbConfig.default.SolicitudDeValidacion;

const users = dbConfig.default.users;

const db = mongojs(dbReaction, [collection]);
const dbUsers = mongojs(dbReaction, [users]);

const NO_RESUELTA = 'No Resuelta';
const RESUELTA = 'Resuelta';

module.exports = app => {

  app.get('/' + collection, (req, res) => {

  console.log(collection);

      db.SolicitudDeValidacion.find((err, SolicitudDeValidacion) => {

          res.json({
              SolicitudDeValidacion
          });

      });

  });

  app.get('/' + collection + '/:id', (req, res) => {

    console.log(collection + ': get one by id: ' + req.params.id);

    if(req.params.id === undefined) {

      db.SolicitudDeValidacion.findOne((err, SolicitudDeValidacion) => {
  
        res.json({
          SolicitudDeValidacion
        });
  
      });

    } else {

      db.SolicitudDeValidacion.findOne({

        _id: mongojs.ObjectId(req.params.id)
  
      }, (err, SolicitudDeValidacion) => {
  
        res.json({
          SolicitudDeValidacion
        });
  
      });

    }

  });

  app.post('/' + collection, (req, res) => {

    console.log('post in: solicitud de validacion');

    setTimeout(() => {

      dbUsers.users.findOne({

        "emails.address": req.body.request.data.address
  
      }, (err, user) => {
  
        db.SolicitudDeValidacion.findOne({
  
          idUser: user._id
    
        }, (err, solicitud) => {
    
          let newSolicitudDeValidacion = solicitud;
    
          if(solicitud != null) {
    
            res.json({
                SolicitudDeValidacion: newSolicitudDeValidacion
            });
    
          } else {
    
            newSolicitudDeValidacion = {
    
              estado: NO_RESUELTA,
              fechaCreacionSolicitud: 'ahora',
              idUser: user._id,
              fechaActualizacionSolicitud: 'tomorrow'
                
            };
  
            db.SolicitudDeValidacion.insert(newSolicitudDeValidacion, (err, SolicitudDeValidacion) => {
    
              res.json({
                  response: {
                    data: {
                      SolicitudDeValidacion
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

    console.log('put in: solicitud de validacion');
    
    db.SolicitudDeValidacion.findAndModify({
      query: {_id: mongojs.ObjectId(req.params.id)} ,
      update: { 
        $set: {
          "estado" : req.body.request.data.SolicitudDeValidacion.estado || "No Resuelta",
          "fechaActualizacionSolicitud" : "pasado mañana"
        } 
      },
      new: true
    }, (err, SolicitudDeValidacion, lastErrorObject) => {

      res.json({
        SolicitudDeValidacion
      });

    });

  });

  app.delete('/' + collection + '/:id', (req, res) => {

    db.SolicitudDeValidacion.remove({

      _id: mongojs.ObjectId(req.params.id)

    }, (err, response) => {

      res.json({
        response
      });

    });

  });

};