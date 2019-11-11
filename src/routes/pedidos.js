var mongojs = require('mongojs');

const db = mongojs('DatabasePedidos', [

    'pedidos'

]);

module.exports = app => {

    app.get('/verduleria/api/0/pedidos', (req, res) => {

        db.pedidos.find((err, pedidos) =>{

            res.json({
                pedidos
            });

        });

    });

    app.post('/verduleria/api/0/pedidos', (req, res) => {

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
                combo: req.body.pedido.productos.combo  || '',
                cantidad: req.body.pedido.productos.cantidad  || '',
                agregados: req.body.pedido.productos.agregados  || [],
            },
            importe: req.body.pedido.importe || '',
            fecha: req.body.pedido.fecha || '',
            estado: 'Pendiente'
            
        };

        db.pedidos.insert(newPedido, (err, pedido) => {

            res.json({
                pedido
            });

        });

    });

    app.put('/verduleria/api/0/pedidos/:id', (req, res) => {

        db.pedidos.findAndModify({
            query: {_id: mongojs.ObjectId(req.params.id)} ,
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
                    productos : {
                        combo : req.body.pedido.productos.combo  || '',
                        cantidad : req.body.pedido.productos.cantidad  || '',
                        agregados : req.body.pedido.productos.agregados  || [],
                    },
                    importe: req.body.pedido.importe || '',
                    fecha: req.body.pedido.fecha || '',
                    estado: req.body.pedido.estado || 'Pendiente'
                    
                } 
            },
            new: true
        }, (err, pedido, lastErrorObject) => {

            res.json({
                pedido
            });

        })

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

    app.delete('/verduleria/api/0/pedidos/:id', (req, res) => {

        db.pedidos.remove({

            _id: mongojs.ObjectId(req.params.id)

        }, (err, response) => {

            res.json({
                response
            });

        });

    });

};