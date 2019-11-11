var mongojs = require('mongojs');
var dbConfig = require('./config');

const dbReaction = dbConfig.default.db;
const collection = dbConfig.default.Shops;

const db = mongojs(dbReaction, [collection]);

module.exports = app => {

    app.get('/' + collection, (req, res) => {

  console.log(collection);

        db.Shops.find((err, Shops) => {

            res.json({
                Shops
            });

        });

    });

};