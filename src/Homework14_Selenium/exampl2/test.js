// Running Selenium tests with Mocha

// require('chromedriver');
// const assert = require('assert');
// const {Builder, Key, By, until} = require('selenium-webdriver');

// describe('Checkout Google.com', function() {
//     let driver;
//     before(async function() {
//         driver = await new Builder().forBrowser('chrome').build();
//     });

//     it('Search on Google', async function() {
//         await driver.get('http://www.google.com/ncr');
//         await driver.sleep(2000); // just for demonstration
//         await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
//         await driver.sleep(2000); // just for demonstration
//         await driver.wait(until.titleIs('webdriver - Пошук Google'), 1000);
//     });
//     after(() => driver && driver.quit());
// })


// ******************************  Get screenshot  *******************************************

const assert = require("assert");
const { Builder, By } = require("selenium-webdriver");
const fs = require("fs");
const path = require("path");

describe("Screenshot", function() {
    let driver;
  
    beforeEach(async function() {
      driver = await new Builder().forBrowser("chrome").build();
    });
  
    afterEach(async function() {
        if (this.currentTest.state !== "passed") {
            const testName = this.currentTest.fullTitle().replace(/\s/g, "-");
            const fileName = path.join(__dirname, `screenshot_${testName}.jpg`);
            fs.writeFileSync(fileName, await driver.takeScreenshot(), "base64");
      }
      await driver.quit();
    });

    it("on failure", async function() {
        await driver.get("http://google.com");
        assert(true === false);
    });
});
    