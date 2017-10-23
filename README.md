## How to setup dev. env. to use protractor tests
You will need to have the Java Development Kit (JDK) installed to run the standalone Selenium Server.

1. Use npm to install Protractor globally with:
```
npm install -g protractor
```
2. The webdriver-manager is a helper tool to easily get an instance of a Selenium Server running. Use it to download the necessary binaries with:
```
webdriver-manager update
```
3. Now start up a server with:
```
webdriver-manager start
```
## Running tests
Make sure selenium server is running, clone and open the current project. Run the following commands from the project folder:

1. Install all required node packages
```
npm install
```
2. Start questionnaire application
```
node app
```
3. Run tests (chrome browser required as it set by default, although you can change it in config file)
```
protractor config/protractor.conf.js
```

You should see chrome browser opens and navigates to the site url, running actions that are described in the specs.
Results will be available in the terminal window where you ran protractor command.
