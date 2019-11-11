var mongojs = require('mongojs');
var dbConfig = require('./config');

const dbReaction = dbConfig.default.db;
const collection = dbConfig.default.meteor_oauth_pendingRequestTokens;

const db = mongojs(dbReaction, [collection]);

module.exports = app => {

    app.get('/' + collection, (req, res) => {

  console.log(collection);

        db.meteor_oauth_pendingRequestTokens.find((err, meteor_oauth_pendingRequestTokens) => {

            res.json({
                meteor_oauth_pendingRequestTokens
            });

            
        });

    });

};