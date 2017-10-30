'use strict';


const config = require(process.cwd() + '/config/protractor.conf.js'),
    HomePage = require('../spec/pages/home.page.js'),
    Chapter2Page = require('../spec/pages/chapter2.page.js');

const _ec = protractor.ExpectedConditions,
    defaultWaitTime = config.defaultWaitTime;

// let chapter2Page = new Chapter2Page(defaultWaitTime);


describe('Webdriver tests. Chapter 4', () => {
    beforeAll(() => {
        browser.ignoreSynchronization = true;
    });

    it('Should check title', () => {
        browser.getTitle().then((title) => {
            if (title !== "Selenium: Beginners Guide") {
                browser.get("http://book.theautomatedtester.co.uk/chapter2");
            }
            expect(browser.getTitle()).toBe("Selenium: Beginners Guide");
        });
    });

    it('Should Check Button On Chapter 2 Page', () => {
        loadHomePage();
        clickAndLoadChapter2();

        expect(element(by.css('#but1')).getSize()).toEqual(jasmine.objectContaining({
            width: 99,
            height: 21
        }));
    });

    it('Should Check Another Button On Chapter 2 Page', () => {
        loadHomePage();
        clickAndLoadChapter2();

        expect(element(by.name('verifybutton')).getSize()).toEqual(jasmine.objectContaining({
            width: 204,
            height: 21
        }));
    });

    it('Should use page objects', () => {
        browser.get("http://book.theautomatedtester.co.uk");
        HomePage.clickChapter(2);
        expect(Chapter2Page.isButtonDisplayed("but1")).toBeTruthy();
    });

    it('Should Load The Home Page And Then Check Button On Chapter2', () => {
        Chapter2Page.get();
        expect(Chapter2Page.isButtonDisplayed("but1")).toBeTruthy();
    });
});

function clickAndLoadChapter2() {
    element(by.linkText("Chapter2")).click();
}

function loadHomePage() {
    browser.get("http://book.theautomatedtester.co.uk");
}
