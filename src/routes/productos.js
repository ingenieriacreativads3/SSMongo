var mongojs = require('mongojs');

const db = mongojs('DatabaseProductos', [

    'productos'

]);

module.exports = app => {

    app.get('/verduleria/api/0/productos', (req, res) => {

        db.productos.find((err, productos) =>{

            console.log('asd');

            res.json({
                productos
            });

        });

    });

    app.post('/verduleria/api/0/productos', (req, res) => {

        db.productos.findOne({

            nombre: req.body.producto.nombre

        }, (err, product) => {

            let newProducto = product;

            if(product != null) {

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

                db.productos.insert(newProducto, (err, producto) => {
        
                    res.json({
                        producto
                    });
        
                });

            }

            

        })

    });

    app.put('/verduleria/api/0/productos/:id', (req, res) => {

        db.productos.findAndModify({
            query: {_id: mongojs.ObjectId(req.params.id)} ,
            update: { 
                $set: {

                    "nombre" : req.body.producto.nombre || '',
                    "precio" : req.body.producto.precio || '',
                    "path" : req.body.producto.path || '',
                    "mostrar" : req.body.producto.mostrar || "false",
                    "enVenta" : req.body.producto.enVenta || "false",
                    "categoria" : req.body.producto.categoria || "false",
                    "esCombo" : req.body.producto.esCombo || "false",
                    "descripcion" : req.body.producto.descripcion || "false"
                } 
            },
            new: true
        }, (err, producto, lastErrorObject) => {

            res.json({
                producto
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

    app.delete('/verduleria/api/0/productos/:id', (req, res) => {

        db.productos.remove({

            _id: mongojs.ObjectId(req.params.id)

        }, (err, response) => {

            res.json({
                response
            });

        });

    });

};