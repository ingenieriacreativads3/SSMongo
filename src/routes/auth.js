var mongojs = require('mongojs');

const db = mongojs('DatabaseUsuarios', [

    'usuarios'

]);

module.exports = app => {

    app.get('/verduleria/api/0/auth', (req, res) => {

        db.usuarios.findOne((err, usuarios) => {

            res.json({
                response: 'funciona el auth'
            });

        });

    });

    app.post('/verduleria/api/0/auth', (req, res) => {

        db.usuarios.findOne({

            email: req.body.email

        }, (err, user) => {

            let response = {
                usuario: user,
                existe: false,
                isAuth: false,
                error: err
            }

            if(user != null) {

                if(user.password == req.body.password){

                    response = {
                        usuario: response.usuario,
                        existe: true,
                        isAuth: true,
                        error: response.error
                    }
    
                } else{

                    response = {
                        usuario: {
                            esCliente : 'Inactivo',
                            esAdmin : 'Inactivo',
                            esRoot : 'Inactivo'
                        },
                        existe: true,
                        isAuth: response.existe,
                        error: response.error
                    }

                }

            } else {

                response = {
                    usuario: {
                        esCliente : 'Inactivo',
                        esAdmin : 'Inactivo',
                        esRoot : 'Inactivo'
                    },
                    existe: false,
                    isAuth: response.isAuth,
                    error: response.error
                }

            }

            res.json({
                response
            });

        })

    });

};