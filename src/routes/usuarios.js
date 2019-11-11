var mongojs = require('mongojs');

const db = mongojs('DatabaseUsuarios', [

    'usuarios'

]);

module.exports = app => {

    app.get('/verduleria/api/0/usuarios', (req, res) => {

        db.usuarios.find((err, usuarios) => {

            res.json({
                usuarios
            });

        });

    });

    app.post('/verduleria/api/0/usuarios', (req, res) => {
        
        db.usuarios.findOne({

            email: req.body.usuario.email

        }, (err, user) => {

            let newUsuario = {};

            if(user != null) {

                res.json({
                    usuario: newUsuario
                });

            } else {

                newUsuario = {

                    nombre: req.body.usuario.nombre || '',
                    apellido: req.body.usuario.apellido || '',
                    email: req.body.usuario.email || '',
                    password: req.body.usuario.password || '',
                    telefono: req.body.usuario.telefono || '',
                    direccion: {
                        calle: req.body.usuario.direccion.calle || '',
                        numero: req.body.usuario.direccion.numero || '',
                    },
                    esCliente: 'Pendiente',
                    esAdmin: 'Pendiente',
                    esRoot: 'Inactivo'
                    
                };

                db.usuarios.insert(newUsuario, (err, usuario) => {
        
                    res.json({
                        usuario
                    });
        
                });

            }

            

        })

    });

    app.put('/verduleria/api/0/usuarios/:id', (req, res) => {

        db.usuarios.findAndModify({
             query: {_id: mongojs.ObjectId(req.params.id)} ,
            update: { 
                $set: {
                    nombre : req.body.usuario.nombre || '',
                    apellido : req.body.usuario.apellido || '',
                    email : req.body.usuario.email || '',
                    password : req.body.usuario.password || '',
                    telefono : req.body.usuario.telefono || '',
                    direccion : {
                        calle : req.body.usuario.direccion.calle || '',
                        numero : req.body.usuario.direccion.numero || '',
                    },
                    esCliente : req.body.usuario.esCliente || 'Pendiente',
                    esAdmin : req.body.usuario.esAdmin || 'Pendiente',
                    esRoot : 'Inactivo'
                } 
            },
            new: true
        }, (err, usuario, lastErrorObject) => {

            res.json({
                usuario
            });

        })

        // console.log('llego el update');

        // let updateUserAsd = {}

        // let updatedUsuario = {

        //     "nombre" : req.body.nombre || '',
        //     "apellido" : req.body.apellido || '',
        //     "email" : req.body.email || '',
        //     "telefono" : req.body.telefono || '',
        //     "esCliente" : req.body.esCliente || false,
        //     "esAdmin" : req.body.esAdmin || false,
        //     "esRoot" : false,

        // };

        // db.usuarios.update(

        //     { _id: mongojs.ObjectId(req.params.id) },
        //     updatedUsuario,
        //     {},
        //     (err, response) => {

        //         res.json({
        //             response
        //         });

        //     }
        // );

    });

    app.delete('/verduleria/api/0/usuarios/:id', (req, res) => {

        db.usuarios.remove({

            _id: mongojs.ObjectId(req.params.id)

        }, (err, response) => {

            res.json({
                response
            });

        });

    });

};