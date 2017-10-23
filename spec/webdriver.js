'use strict';

var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var selenium = new webdriver.Builder()
    .forBrowser('firefox')
    .build(),
    config = require(process.cwd() + '/config/protractor.conf.js');

// const _ec = protractor.ExpectedConditions,
//     defaultWaitTime = config.defaultWaitTime;

// let questionnairePage = new QuestionnairePage(defaultWaitTime),
//     resultsPage = new ResultsPage(defaultWaitTime);


describe('Webdriver tests', () => {

    it('1', () => {
        if (!"Page 2".equals(selenium.getTitle())) {
            selenium.get("http://book.theautomatedtester.co.uk/chapter2");
        }
        expect(selenium.getTitle()).toBe("Page 2");
    });

});