let ResultsPage = function(defaultWaitTime) {
    defaultWaitTime = defaultWaitTime || 1000 * 3;
    const _ec = protractor.ExpectedConditions;

    this.results = element.all(by.repeater('answer in answers'));

    this.getPage = () => {
        browser.get(browser.configuration.mainSiteUrl + '/results');
        browser.waitForAngular();
        browser.sleep(defaultWaitTime);
    };
}

module.exports = ResultsPage;