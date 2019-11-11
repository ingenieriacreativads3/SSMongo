
var bodyParser = require('body-parser');

module.exports = app => {

    app.set('json spaces', 4);
    app.set('port', process.env.PORT || 3000);
    //app.set('port', 3002);

    //esto es para entender los json que llegan
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
    // app.use(formidable.parse({ keepExtensions: true }));
    // app.use(formidable);

};