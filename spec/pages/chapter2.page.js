let Chapter2Page = function(defaultWaitTime) {
    defaultWaitTime = defaultWaitTime || 1000 * 3;
    const _ec = protractor.ExpectedConditions;

    this.verifyButton = element(by.name('verifybutton'));

    this.load = () => {
        browser.get("http://book.theautomatedtester.co.uk/chapter2");
    };

    this.isLoaded = () => {
        browser.getCurrentUrl().then((currentUrl) => {
            if (currentUrl !== "http://book.theautomatedtester.co.uk/chapter2") {
                throw new Error("The wrong page has loaded");
            }
        });
    };

    this.get = () => {
        browser.getTitle().then((title) => {
            if (title !== "Selenium: Beginners Guide") {
                browser.get("http://book.theautomatedtester.co.uk/chapter2");
            }
        });
    };

    this.isButtonDisplayed = (buttonId) => {
        return element(by.id(buttonId)).isDisplayed();
    };

};

module.exports = Chapter2Page;