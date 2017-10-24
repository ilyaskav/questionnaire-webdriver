let HomePage = function(defaultWaitTime) {
    defaultWaitTime = defaultWaitTime || 1000 * 3;
    const _ec = protractor.ExpectedConditions;

    this.clickChapter = (number) => {
        element(by.linkText("Chapter" + number)).click();
    };

};

module.exports = HomePage;