function Page () {
    this.title = 'My Page';
}

Page.prototype.load = function (path) {
    browser.url('/' + path)
}

module.exports = new Page();