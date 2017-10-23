'use strict';

let QuestionnairePage = require('../spec/pages/questionnaire.page'),
    ResultsPage = require('../spec/pages/results.page'),
    config = require(process.cwd() + '/config/protractor.conf.js');

const _ec = protractor.ExpectedConditions,
    defaultWaitTime = config.defaultWaitTime;

let questionnairePage = new QuestionnairePage(defaultWaitTime),
    resultsPage = new ResultsPage(defaultWaitTime);


describe('Get results', () => {

    it('Should add questionnaire', () => {
        resultsPage.getPage();

        resultsPage.results.count().then((resultsBeforeSubmission) => {
            questionnairePage.getPage();
            questionnairePage.fillForm();
            questionnairePage.submit();

            resultsPage.getPage();

            expect(resultsPage.results.count()).toEqual(++resultsBeforeSubmission);
        });
    });

});