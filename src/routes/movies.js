var mongojs = require('mongojs');

const db = mongojs('DatabaseMovies1', [

    'movies'

]);

module.exports = app => {

    app.get('/verduleria/api/0/movies', (req, res) => {

        console.log('llego el get');

        db.movies.find((err, movies) =>{

            res.json({
                movies
            });

        });

    });

    app.post('/verduleria/api/0/movies', (req, res) => {

        let newMovie = req.body;

        db.movies.insert(newMovie, (err, movie) => {

            res.json({

                //response: movie
                movie
    
            });

        });

    });

    // app.put('/verduleria/api/0/movies/:id', (req, res) => {

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

    app.delete('/verduleria/api/0/movies/:id', (req, res) => {


        console.log('llego el delete');

        db.movies.remove(

            { _id: mongojs.ObjectId(req.params.id) }, 
            (err, response) => {

                res.json({
                    response
                });

            });

    });

};