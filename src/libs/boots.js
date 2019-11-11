

module.exports = app => {

    app.listen(app.get('port'), () => {
        console.log(`server on port ${app.get('port')}`);
    });

    // app.listen(app.get(3000), () => {
    //     console.log(`server on port 3000`);
    // }); 

};