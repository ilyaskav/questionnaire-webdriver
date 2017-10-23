let specs = ['webdriver.js'];
let data = {
    mainSiteUrl: 'http://localhost:8080'
};

exports.config = {
    framework: 'jasmine2',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: specs.map((value) => { return '../spec/' + value }),
    capabilities: {
        browserName: 'firefox'
    },
    jasmineNodeOpts: {
        defaultTimeoutInterval: 140000,
        print: function() { }
    },
    onPrepare: function() {
        let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
        // add jasmine spec reporter
        jasmine.getEnv().addReporter(new SpecReporter({
            suite: {
                displayNumber: true   // display each suite number (hierarchical)
            },
            spec: {
                displayDuration: true, // display each spec duration
                displayPending: true  // display each pending spec
            }
        }));

        browser.configuration = data;
        browser.driver.manage().window().maximize();
    },
    defaultWaitTime: 1000
}