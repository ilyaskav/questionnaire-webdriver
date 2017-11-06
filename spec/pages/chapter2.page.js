let Page = require('./page');
let Chapter2Page = Object.create(Page, {

    verifyButton: { get: () => element(by.name('verifybutton')) },

    load: {
        value: function () {
            browser.get("http://book.theautomatedtester.co.uk/chapter2");
        }
    },

    isLoaded: {
        value: () => {
            browser.getCurrentUrl().then((currentUrl) => {
                if (currentUrl !== "http://book.theautomatedtester.co.uk/chapter2") {
                    throw new Error("The wrong page has loaded");
                }
            });
        }
    },

    get: {
        value: () => {
            browser.getTitle().then((title) => {
                if (title !== "Selenium: Beginners Guide") {
                    browser.get("http://book.theautomatedtester.co.uk/chapter2");
                }
            });
        }
    },

    isButtonDisplayed: {
        value: (buttonId) => {
            return element(by.id(buttonId)).isDisplayed();
        }
    }

});

module.exports = Chapter2Page;