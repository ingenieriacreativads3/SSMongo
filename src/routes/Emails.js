var mongojs = require('mongojs');
var dbConfig = require('./config');

const dbReaction = dbConfig.default.db;
const collection = dbConfig.default.Emails;

const db = mongojs(dbReaction, [collection]);

module.exports = app => {

    app.get('/' + collection, (req, res) => {

  console.log(collection);

        db.Emails.find((err, Emails) => {

            res.json({
                Emails
            });

        });

    });

    app.delete('/' + collection + '/:id', (req, res) => {

        db.Emails.remove({

            _id: mongojs.ObjectId(req.params.id)

        }, (err, response) => {

            res.json({
                response
            });

        });

    });

};