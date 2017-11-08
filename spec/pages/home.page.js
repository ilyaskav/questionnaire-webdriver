let Page = require('./page');
let HomePage = Object.create(Page, {

    
    load: {
        value: function () {
            Page.load.call(this, 'login');
        }
    },

    clickChapter: {
        value: (number) => {
            element(by.linkText("Chapter" + number)).click();
        }
    }
});

module.exports = HomePage;