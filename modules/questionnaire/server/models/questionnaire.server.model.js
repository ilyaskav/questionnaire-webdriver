'use strict';

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var questionnaireSchema = Schema({
    codeQuality: Number,
    bestDev: String,
    suggestions: String,
    lengthOfSprint: Number,
    name: String,
    created: { type: Date, default: Date.now }
});

var Questionnaire = mongoose.model('Questionnaire', questionnaireSchema);