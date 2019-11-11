var mongojs = require('mongojs');
var dbConfig = require('./config');

const dbReaction = dbConfig.default.db;
const collection = dbConfig.default.FlatRateFulfillmentRestrictions;

const db = mongojs(dbReaction, [collection]);

module.exports = app => {

    app.get('/' + collection, (req, res) => {

  console.log(collection);

        db.FlatRateFulfillmentRestrictions.find((err, FlatRateFulfillmentRestrictions) => {

            res.json({
                FlatRateFulfillmentRestrictions
            });

        });

    });

};