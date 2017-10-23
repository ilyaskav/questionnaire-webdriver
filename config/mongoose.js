'use strict';

var path = require('path'),
    mongoose = require('mongoose'),
    models = ['modules/questionnaire/server/models/questionnaire.server.model.js'];

// Load the mongoose models
module.exports.loadModels = function() {
    // Globbing model files
    models.forEach(function(modelPath) {
        require(path.resolve(modelPath));
    });
};

// Initialize Mongoose
module.exports.connect = function(cb) {
    var _this = this;

    mongoose.Promise = require('bluebird');

    var db = mongoose.connect('mongodb://localhost/questionnaire', function(err) {
        // Log Error
        if (err) {
            console.error('[Mongoose:connect] - Could not connect to MongoDB!', err);
        } else {
            // Load modules
            _this.loadModels();

            // Call callback FN
            if (cb) cb(db);
        }
    });
};

module.exports.disconnect = function(cb) {
    mongoose.disconnect(function(err) {
        console.info('[Mongoose:disconnect] - Disconnected from MongoDB.');
        cb(err);
    });
};