const Page = require('./Page');

class HomePage extends Page {
    get username() { return browser.element('#username'); }
    // constructor(defaultWaitTime) {
    //     this.defaultWaitTime = defaultWaitTime || 1000 * 3;

    // }
    // const _ec = protractor.ExpectedConditions;

    clickChapter(number) {
        element(by.linkText("Chapter" + number)).click();
    }

};

module.exports = new HomePage();