/**
 * Created by Lady Pinzon on 15/09/2017.
 */
const express = require('express');
const mongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();
const config = require( './config');
const cors = require( 'cors');

app.use(bodyParser.urlencoded({extend: true}));
app.use(bodyParser.json());
app.use(cors());
const routes = require('./API/index');
routes(app);


let db;

mongoClient.connect(config.database, (err, database)=>{

    if(err) return console.log(err);
    db = database;
    console.log('Conección exitosa a la base de datos');
    module.exports.database = db;

    app.listen(config.port, () => {
        console.log('corriendo en el puerto: ' + config.port)
    });
});

