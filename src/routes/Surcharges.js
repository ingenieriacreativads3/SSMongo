var mongojs = require('mongojs');
var dbConfig = require('./config');

const dbReaction = dbConfig.default.db;
const collection = dbConfig.default.Surcharges;

const db = mongojs(dbReaction, [collection]);

module.exports = app => {

    app.get('/' + collection, (req, res) => {

  console.log(collection);

        db.Surcharges.find((err, Surcharges) => {

            res.json({
                Surcharges
            });

            
        });

    });

};