'use strict';

let QuestionnairePage = require('../spec/pages/questionnaire.page'),
    config = require(process.cwd() + '/config/protractor.conf.js');

const _ec = protractor.ExpectedConditions,
    defaultWaitTime = config.defaultWaitTime;

let questionnairePage = new QuestionnairePage(defaultWaitTime);


describe('Add questionnaire form', () =>{
    
    beforeAll(() =>{
        questionnairePage.getPage();
    });

    afterEach(() => {
        questionnairePage.clearForm();
    });

    it('Should show error if any field is empty', () =>{
        questionnairePage.fillForm();
        questionnairePage.nameField.clear();

        questionnairePage.submit();
        
        expect(questionnairePage.error.getText()).toBe('Fill out all fields');
    });

    it('Should show error if length of sprint is not a number', () =>{
        questionnairePage.fillForm();
        questionnairePage.setLengthOfSprint('e2e');

        questionnairePage.submit();

        expect(questionnairePage.error.getText()).toBe('Length of sprint should be a number');
    });

    it('Should show alert "Thank you for taking your time" on successful form submission', () => {
        questionnairePage.fillForm();

        questionnairePage.submit();

        expect(questionnairePage.successMessageDiv.isDisplayed()).toBeTruthy();
    });

    it('Should show sprint status on successful form submission', () => {
        questionnairePage.fillForm();

        questionnairePage.submit();

        expect(questionnairePage.sprintStatusDiv.isDisplayed()).toBeTruthy();
    });

});