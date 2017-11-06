let Page = require('./page');
let HomePage = Object.create(Page, {
    // defaultWaitTime = defaultWaitTime || 1000 * 3;
    // const _ec = protractor.ExpectedConditions;

    load: {
        value: function () {
            Page.open.call(this, 'login');
        }
    },

    clickChapter: {
        value: (number) => {
            element(by.linkText("Chapter" + number)).click();
        }
    }
});

module.exports = HomePage;