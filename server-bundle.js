'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _consign = require('consign');

var _consign2 = _interopRequireDefault(_consign);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
//Se puede usar asi, pero no estarias usando emacscript6
//const express = require('express');

app.use((0, _cors2.default)());

(0, _consign2.default)().include('/src/libs/middlewares.js').then('/src/routes').include('/src/libs/boots.js').into(app);
'use strict';

module.exports = function (app) {

    app.listen(app.get('port'), function () {
        console.log('server on port ' + app.get('port'));
    });

    // app.listen(app.get(3000), () => {
    //     console.log(`server on port 3000`);
    // }); 
};
'use strict';

var bodyParser = require('body-parser');

module.exports = function (app) {

    app.set('json spaces', 4);
    app.set('port', process.env.PORT || 3000);
    //app.set('port', 3002);

    //esto es para entender los json que llegan
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    // app.use(formidable.parse({ keepExtensions: true }));
    // app.use(formidable);
};
'use strict';

var mongojs = require('mongojs');

var db = mongojs('DatabaseUsuarios', ['usuarios']);

module.exports = function (app) {

    app.get('/api/0/auth', function (req, res) {

        db.usuarios.findOne(function (err, usuarios) {

            res.json({
                response: 'funciona el auth'
            });
        });
    });

    app.post('/api/0/auth', function (req, res) {

        db.usuarios.findOne({

            email: req.body.email

        }, function (err, user) {

            var response = {
                usuario: user,
                existe: false,
                isAuth: false,
                error: err
            };

            if (user != null) {

                if (user.password == req.body.password) {

                    response = {
                        usuario: response.usuario,
                        existe: true,
                        isAuth: true,
                        error: response.error
                    };
                } else {

                    response = {
                        usuario: {
                            esCliente: 'Inactivo',
                            esAdmin: 'Inactivo',
                            esRoot: 'Inactivo'
                        },
                        existe: true,
                        isAuth: response.existe,
                        error: response.error
                    };
                }
            } else {

                response = {
                    usuario: {
                        esCliente: 'Inactivo',
                        esAdmin: 'Inactivo',
                        esRoot: 'Inactivo'
                    },
                    existe: false,
                    isAuth: response.isAuth,
                    error: response.error
                };
            }

            res.json({
                response: response
            });
        });
    });
};
'use strict';

var mongojs = require('mongojs');

var db = mongojs('DatabaseDireccion', ['direcciones']);

module.exports = function (app) {

    app.get('/api/0/direcciones', function (req, res) {

        console.log('llego el get');

        db.direcciones.find(function (err, direcciones) {

            res.json({
                direcciones: direcciones
            });
        });
    });

    app.post('/api/0/direcciones', function (req, res) {

        var newDireccion = {

            "usuario": req.body.usuario || '',
            "calle": req.body.calle || '',
            "numero": req.body.numero || ''

        };

        console.log('llego el post');

        db.direcciones.insert(newDireccion, function (err, direccion) {

            res.json({

                //response: usuario
                direccion: direccion

            });
        });
    });

    // app.put('/api/0/direcciones/:id', (req, res) => {

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

    app.delete('/api/0/direcciones/:id', function (req, res) {

        console.log('llego el delete');

        db.direcciones.remove({ _id: mongojs.ObjectId(req.params.id) }, function (err, response) {

            res.json({
                response: response
            });
        });
    });
};
'use strict';

module.exports = function (app) {

    app.get('/', function (req, res) {

        res.json({
            response: 'API Works!'
        });
    });
};
'use strict';

var mongojs = require('mongojs');

var db = mongojs('DatabaseMovies1', ['movies']);

module.exports = function (app) {

    app.get('/api/0/movies', function (req, res) {

        console.log('llego el get');

        db.movies.find(function (err, movies) {

            res.json({
                movies: movies
            });
        });
    });

    app.post('/api/0/movies', function (req, res) {

        var newMovie = req.body;

        db.movies.insert(newMovie, function (err, movie) {

            res.json({

                //response: movie
                movie: movie

            });
        });
    });

    // app.put('/api/0/movies/:id', (req, res) => {

    //     let updatedMovie = req.body;

    //     console.log('llego el update');

    //     db.movies.update(

    //         { _id: mongojs.ObjectId(req.params.id) },
    //         updatedMovie,
    //         {},
    //         (err, response) => {

    //             res.json({
    //                 response
    //             });

    //         }
    //     );

    // });

    app.delete('/api/0/movies/:id', function (req, res) {

        console.log('llego el delete');

        db.movies.remove({ _id: mongojs.ObjectId(req.params.id) }, function (err, response) {

            res.json({
                response: response
            });
        });
    });
};
'use strict';

var mongojs = require('mongojs');

var db = mongojs('DatabasePedidos', ['pedidos']);

module.exports = function (app) {

    app.get('/api/0/pedidos', function (req, res) {

        db.pedidos.find(function (err, pedidos) {

            res.json({
                pedidos: pedidos
            });
        });
    });

    app.post('/api/0/pedidos', function (req, res) {

        var newPedido = {

            usuario: {
                _id: req.body.pedido.usuario._id || '',
                nombre: req.body.pedido.usuario.nombre || '',
                apellido: req.body.pedido.usuario.apellido || '',
                telefono: req.body.pedido.usuario.telefono || '',
                direccion: {
                    calle: req.body.pedido.usuario.direccion.calle || '',
                    numero: req.body.pedido.usuario.direccion.numero || ''
                }
            },
            productos: {
                combo: req.body.pedido.productos.combo || '',
                cantidad: req.body.pedido.productos.cantidad || '',
                agregados: req.body.pedido.productos.agregados || []
            },
            importe: req.body.pedido.importe || '',
            fecha: req.body.pedido.fecha || '',
            estado: 'Pendiente'

        };

        db.pedidos.insert(newPedido, function (err, pedido) {

            res.json({
                pedido: pedido
            });
        });
    });

    app.put('/api/0/pedidos/:id', function (req, res) {

        db.pedidos.findAndModify({
            query: { _id: mongojs.ObjectId(req.params.id) },
            update: {
                $set: {

                    usuario: {
                        _id: req.body.pedido.usuario._id || '',
                        nombre: req.body.pedido.usuario.nombre || '',
                        apellido: req.body.pedido.usuario.apellido || '',
                        telefono: req.body.pedido.usuario.telefono || '',
                        direccion: {
                            calle: req.body.pedido.usuario.direccion.calle || '',
                            numero: req.body.pedido.usuario.direccion.numero || ''
                        }
                    },
                    productos: {
                        combo: req.body.pedido.productos.combo || '',
                        cantidad: req.body.pedido.productos.cantidad || '',
                        agregados: req.body.pedido.productos.agregados || []
                    },
                    importe: req.body.pedido.importe || '',
                    fecha: req.body.pedido.fecha || '',
                    estado: req.body.pedido.estado || 'Pendiente'

                }
            },
            new: true
        }, function (err, pedido, lastErrorObject) {

            res.json({
                pedido: pedido
            });
        });

        // console.log('llego el update');

        // let updateUserAsd = {}

        // let updatedPedido = {

        //     "nombre" : req.body.nombre || '',
        //     "apellido" : req.body.apellido || '',
        //     "email" : req.body.email || '',
        //     "telefono" : req.body.telefono || '',
        //     "esCliente" : req.body.esCliente || false,
        //     "esAdmin" : req.body.esAdmin || false,
        //     "esRoot" : false,

        // };

        // db.pedidos.update(

        //     { _id: mongojs.ObjectId(req.params.id) },
        //     updatedPedido,
        //     {},
        //     (err, response) => {

        //         res.json({
        //             response
        //         });

        //     }
        // );
    });

    app.delete('/api/0/pedidos/:id', function (req, res) {

        db.pedidos.remove({

            _id: mongojs.ObjectId(req.params.id)

        }, function (err, response) {

            res.json({
                response: response
            });
        });
    });
};
'use strict';

var mongojs = require('mongojs');

var db = mongojs('DatabaseProductos', ['productos']);

module.exports = function (app) {

        app.get('/api/0/productos', function (req, res) {

                db.productos.find(function (err, productos) {

                        res.json({
                                productos: productos
                        });
                });
        });

        app.post('/api/0/productos', function (req, res) {

                db.productos.findOne({

                        nombre: req.body.producto.nombre

                }, function (err, product) {

                        var newProducto = product;

                        if (product != null) {

                                res.json({
                                        producto: newProducto
                                });
                        } else {

                                newProducto = {

                                        nombre: req.body.producto.nombre || '',
                                        precio: req.body.producto.precio || '',
                                        path: req.body.producto.path || '',
                                        mostrar: req.body.producto.mostrar || "false",
                                        enVenta: req.body.producto.enVenta || "false",
                                        categoria: req.body.producto.categoria || "false",
                                        esCombo: req.body.producto.esCombo || "false",
                                        descripcion: req.body.producto.descripcion || "false"

                                };

                                db.productos.insert(newProducto, function (err, producto) {

                                        res.json({
                                                producto: producto
                                        });
                                });
                        }
                });
        });

        app.put('/api/0/productos/:id', function (req, res) {

                db.productos.findAndModify({
                        query: { _id: mongojs.ObjectId(req.params.id) },
                        update: {
                                $set: {

                                        "nombre": req.body.producto.nombre || '',
                                        "precio": req.body.producto.precio || '',
                                        "path": req.body.producto.path || '',
                                        "mostrar": req.body.producto.mostrar || "false",
                                        "enVenta": req.body.producto.enVenta || "false",
                                        "categoria": req.body.producto.categoria || "false",
                                        "esCombo": req.body.producto.esCombo || "false",
                                        "descripcion": req.body.producto.descripcion || "false"
                                }
                        },
                        new: true
                }, function (err, producto, lastErrorObject) {

                        res.json({
                                producto: producto
                        });
                });

                // console.log('llego el update');

                // let updateUserAsd = {}

                // let updatedProducto = {

                //     "nombre" : req.body.nombre || '',
                //     "apellido" : req.body.apellido || '',
                //     "email" : req.body.email || '',
                //     "telefono" : req.body.telefono || '',
                //     "esCliente" : req.body.esCliente || false,
                //     "esAdmin" : req.body.esAdmin || false,
                //     "esRoot" : false,

                // };

                // db.productos.update(

                //     { _id: mongojs.ObjectId(req.params.id) },
                //     updatedProducto,
                //     {},
                //     (err, response) => {

                //         res.json({
                //             response
                //         });

                //     }
                // );
        });

        app.delete('/api/0/productos/:id', function (req, res) {

                db.productos.remove({

                        _id: mongojs.ObjectId(req.params.id)

                }, function (err, response) {

                        res.json({
                                response: response
                        });
                });
        });
};
'use strict';

var mongojs = require('mongojs');

var db = mongojs('DatabaseUsuarios', ['usuarios']);

// "esCliente" : req.body.usuario.esCliente,
// "esAdmin" : req.body.usuario.esAdmin,
// "esRoot" : req.body.usuario.esRoot


module.exports = function (app) {

        app.get('/api/0/usuarios', function (req, res) {

                db.usuarios.find(function (err, usuarios) {

                        res.json({
                                usuarios: usuarios
                        });
                });
        });

        app.post('/api/0/usuarios', function (req, res) {

                db.usuarios.findOne({

                        email: req.body.usuario.email

                }, function (err, user) {

                        var newUsuario = {};

                        if (user != null) {

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
                                                numero: req.body.usuario.direccion.numero || ''
                                        },
                                        esCliente: 'Pendiente',
                                        esAdmin: 'Pendiente',
                                        esRoot: 'Inactivo'

                                };

                                db.usuarios.insert(newUsuario, function (err, usuario) {

                                        res.json({
                                                usuario: usuario
                                        });
                                });
                        }
                });
        });

        app.put('/api/0/usuarios/:id', function (req, res) {

                db.usuarios.findAndModify({
                        query: { _id: mongojs.ObjectId(req.params.id) },
                        update: {
                                $set: {
                                        "nombre": req.body.usuario.nombre || '',
                                        "apellido": req.body.usuario.apellido || '',
                                        "email": req.body.usuario.email || '',
                                        "password": req.body.usuario.password || '',
                                        "telefono": req.body.usuario.telefono || '',
                                        "direccion": {
                                                "calle": req.body.usuario.direccion.calle || '',
                                                "numero": req.body.usuario.direccion.numero || ''
                                        },
                                        "esCliente": req.body.usuario.esCliente || 'Pendiente',
                                        "esAdmin": req.body.usuario.esAdmin || 'Pendiente',
                                        "esRoot": 'Inactivo'
                                }
                        },
                        new: true
                }, function (err, usuario, lastErrorObject) {

                        res.json({
                                usuario: usuario
                        });
                });

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

        app.delete('/api/0/usuarios/:id', function (req, res) {

                db.usuarios.remove({

                        _id: mongojs.ObjectId(req.params.id)

                }, function (err, response) {

                        res.json({
                                response: response
                        });
                });
        });
};
