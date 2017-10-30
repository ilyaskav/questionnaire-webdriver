const Page = require('./Page');

class Chapter2Page extends Page {
    // defaultWaitTime = defaultWaitTime || 1000 * 3;
    // const _ec = protractor.ExpectedConditions;

    // this.verifyButton = 
    get verifyButton() { return element(by.name('verifybutton')); } 

    get load () { return browser.get("http://book.theautomatedtester.co.uk/chapter2"); }

    isLoaded () {
        browser.getCurrentUrl().then((currentUrl) => {
            if (currentUrl !== "http://book.theautomatedtester.co.uk/chapter2") {
                throw new Error("The wrong page has loaded");
            }
        });
    }

    get () {
        browser.getTitle().then((title) => {
            if (title !== "Selenium: Beginners Guide") {
                browser.get("http://book.theautomatedtester.co.uk/chapter2");
            }
        });
    }

    isButtonDisplayed (buttonId) {
        return element(by.id(buttonId)).isDisplayed();
    }

}

module.exports = new Chapter2Page();