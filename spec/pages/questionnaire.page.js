let QuestionnairePage = function(defaultWaitTime) {
    defaultWaitTime = defaultWaitTime || 1000 * 3;
    const _ec = protractor.ExpectedConditions;

    this.bestDevSelect = element(by.css('#bestDev'));
    this.suggestionsTextarea = element(by.css('#suggestions'));
    this.lengthOfSprintField = element(by.css('#lengthOfSprint'));
    this.nameField = element(by.css('#name'));
    this.sprintStatusDiv = element(by.css('#sprintStatus div'));
    this.successMessageDiv = element(by.css('.alert.js-submissionSuccessMessage'));
    this.errorMessageDiv = element(by.css('.alert.js-submissionErrorMessage'));
    this.submitButton = element(by.css('button[type="submit"]'));
    this.resetButton = element(by.css('button[type="reset"]'));
    this.error = element(by.binding('error'));

    this.setBestDev = (dev) => {
        element(by.cssContainingText('option', dev)).click();
    };

    this.setSuggestion = (text) => {
        this.suggestionsTextarea.clear().sendKeys(text);
    };

    this.setLengthOfSprint = (number) => {
        this.lengthOfSprintField.clear().sendKeys(number);
    };

    this.setName = (text) => {
        this.nameField.clear().sendKeys(text);
    };

    this.submit = () => {
        this.submitButton.click();
    };

    this.fillForm = () => {
        this.setBestDev('Eugene Novikov');
        this.setSuggestion('More devtesting');
        this.setLengthOfSprint(5);
        this.setName('Test user');
    };

    this.clearForm = () => {
        this.resetButton.click();
    };

    this.getPage = () => {
        browser.get(browser.configuration.mainSiteUrl + '/form');
        browser.waitForAngular();
    };
}

module.exports = QuestionnairePage;