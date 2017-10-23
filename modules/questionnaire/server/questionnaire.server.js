'use strict';

var mongoose = require('mongoose');
var moment = require('moment');
var util = require('util');
var Questionnaire = mongoose.model('Questionnaire');

exports.add = (req, res) => {
    req.checkBody('codeQuality', 'Invalid code quality value').notEmpty().isInt();
    req.checkBody('suggestions', 'Suggestions should not be empty').notEmpty();
    req.checkBody('lengthOfSprint', 'Invalid length Of Sprint value').notEmpty().isInt();
    req.checkBody('name', 'Name is required').notEmpty();

    req.getValidationResult().then(function(result) {
        if (!result.isEmpty()) {
            res.status(400).send('There have been validation errors: ' + util.inspect(result.array()));
            return;
        }

        Questionnaire(req.body).save((err) => {
            if (err) {
                res.status(400).send('Could not get data');
            }

            res.status(200).send();
        });
    });
};

exports.list = (req, res, next) => {
    let show = 5,
        page = req.query.page ? parseInt(req.query.page) : 1,
        skip = show * (page - 1),   
        from = skip + 1,
        to = from + show - 1,        
        pagination = {page};

    Questionnaire.count().exec((err, totalCount) => {
        let aggregationQuery = [
            { $sort: { created: -1 } },
            { $skip: skip },
            { $limit: show }
        ];

        Questionnaire.aggregate(aggregationQuery).exec((err, result) => {
            if (err) {
                next(err);
            }

            pagination.total = totalCount;
            pagination.from = result ? from : 0;            
            pagination.to = result ? (totalCount <= to ? totalCount : to) : 0;
            pagination.pagesTotal = Math.ceil(totalCount / show);

            if (pagination.pagesTotal <= 6){
                pagination.pages = Array.from(Array(pagination.pagesTotal + 1).keys()).slice(1);
            }

            res.json({ answers: result, pagination: pagination });
        });
    });
};
