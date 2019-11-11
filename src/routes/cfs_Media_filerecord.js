var mongojs = require('mongojs');
var dbConfig = require('./config');

const dbReaction = dbConfig.default.db;
const collection = dbConfig.default.cfs_Media_filerecord;

const db = mongojs(dbReaction, [collection]);

module.exports = app => {

    app.get('/' + collection, (req, res) => {

  console.log(collection);

        db.cfs_Media_filerecord.find((err, cfs_Media_filerecord) => {

            res.json({
                cfs_Media_filerecord
            });

            
        });

    });

};