var mongojs = require('mongojs');
var dbConfig = require('./config');

const dbReaction = dbConfig.default.db;
const collection = dbConfig.default.meteor_accounts_loginServiceConfiguration;

const db = mongojs(dbReaction, [collection]);

module.exports = app => {

    app.get('/' + collection, (req, res) => {

  console.log(collection);

        db.meteor_accounts_loginServiceConfiguration.find((err, meteor_accounts_loginServiceConfiguration) => {

            res.json({
                meteor_accounts_loginServiceConfiguration
            });

            
        });

    });

};