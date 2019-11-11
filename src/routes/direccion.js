var mongojs = require('mongojs');

const db = mongojs('DatabaseDireccion', [

    'direcciones'

]);

module.exports = app => {

    app.get('/verduleria/api/0/direcciones', (req, res) => {

        console.log('llego el get');

        db.direcciones.find((err, direcciones) => {

            res.json({
                direcciones
            });

        });

    });

    app.post('/verduleria/api/0/direcciones', (req, res) => {

        let newDireccion = {

            "usuario" : req.body.usuario || '',
            "calle" : req.body.calle || '',
            "numero" : req.body.numero || ''

        };
        
        console.log('llego el post');

        db.direcciones.insert(newDireccion, (err, direccion) => {

            res.json({

                //response: usuario
                direccion
    
            });

        });

    });

    // app.put('/verduleria/api/0/direcciones/:id', (req, res) => {

    //     console.log('llego el update');

    //     let updatedDireccion = {

    //         "usuario" : req.body.usuario || '',
    //         "calle" : req.body.calle || '',
    //         "numero" : req.body.numero || ''

    //     };
        
    //     db.direcciones.update(

    //         { _id: mongojs.ObjectId(req.params.id) },
    //         updatedDireccion,
    //         {},
    //         (err, response) => {

    //             res.json({
    //                 response
    //             });

    //         }
    //     );

    // });

    app.delete('/verduleria/api/0/direcciones/:id', (req, res) => {

        console.log('llego el delete');

        db.direcciones.remove(
            { _id: mongojs.ObjectId(req.params.id) }, 
            (err, response) => {

                res.json({
                    response
                });

            });

    });

};