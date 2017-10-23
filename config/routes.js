var express = require('express');
var engine = require('ejs-locals');
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var lib = path.join(path.dirname(fs.realpathSync(__filename)), '../modules/questionnaire/server');
var logger = require(lib + '/logger.js');
var exHandler = require(lib + '/exception-handler.js');
var api = require(lib + '/questionnaire.server.js');
// var viewResult = require(lib + '/view-result.server.js');


module.exports = function(app) {
    app.set('views', path.join(__dirname, '../public'));
    app.engine('ejs', engine);
    app.set('view engine', 'ejs');
    // middleware
    app.use(bodyParser.json());
    app.use(expressValidator()); // this line must be immediately after any of the bodyParser middlewares! 
    app.use(express.static('public'));
    app.use(logger);


    app.route('/api/submitForm').post(api.add);

    app.route('/api/results').get(api.list);

    app.route('/tests').get((req, res) =>{
        res.sendFile(path.resolve('public/SpecRunner.html'));
    });

    app.use(express.static('dist'));
    app.use(express.static('modules'));

    app.route('/*').get((req, res) =>{
        res.render('layout', { title: 'Brandply questionnaire' });
    });

    app.use(exHandler);
};