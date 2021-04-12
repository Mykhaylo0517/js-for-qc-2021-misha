// const {Builder, By, Key} = require('selenium-webdriver');
//  
// (async function example() {
//     let driver = await new Builder().forBrowser('chrome').build();
//     try {
//         await driver.get('http://www.google.com/ncr');
//         await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
//         console.log("Test passed");
//     } finally {
//         await driver.quit();
//     }
// })();

// ***********************   asynchronous JS method ***************************
// bad
// const {Builder} = require('selenium-webdriver');
//  
// (function showTitle() {
//     const driver = new Builder().forBrowser('chrome').build();
//     driver.get('http://www.google.com/ncr');
//     const title = driver.getTitle(); // (node:15836) UnhandledPromiseRejectionWarning: Error: ECONNREFUSED ...
//     console.log(title);  
//     driver.quit();    
// })();   


// *********************** asynchronous JS method ***************************
// good
// const {Builder} = require('selenium-webdriver');
//  
// (async function showTitle() {
//     const driver = new Builder().forBrowser('chrome').build();
//     await driver.get('http://www.google.com/ncr');
//     await driver.getTitle().then(function(title) {
//         console.log(title);
//     });
   
//     // await (await driver).switchTo().newWindow('tab');
//     // await (await driver).switchTo().newWindow('window');
//     await driver.quit();
// })(); 


// *********************** Challenge example *******************************

// const {Builder, By, until} = require('selenium-webdriver'); 
// async function testWaits() {
//     const driver = new Builder().forBrowser('chrome').build();
//     await driver.get('https://library-app.firebaseapp.com/');    
//     await driver.findElement(By.css('input')).sendKeys('test@gmail.com');    
//     await driver.findElement(By.css('.btn')).click();
//     // await driver.sleep(2000);
//     await driver.findElement(By.css('.alert-success')).getText().then(function(text) {
//         console.log(`Alert success text is: ${text}`);	// error
//     });
//     await driver.quit();
// };
// testWaits();

// *********************** Explicit wait *******************************

// const {Builder, By, until} = require('selenium-webdriver'); 
// async function testWaits() {
//     const driver = new Builder().forBrowser('chrome').build();
//     await driver.get('https://library-app.firebaseapp.com/');    
//     await driver.findElement(By.css('input')).sendKeys('test@gmail.com');    
//     await driver.findElement(By.css('.btn')).click();
//     // await driver.sleep(2000);
//     // await driver.findElement(By.css('.alert-success')).getText().then(function(text) {
//     //      console.log(`Alert success text is: ${text}`);	// error
//     // });
//     let alertElem = await driver.wait(until.elementLocated(By.css('.alert-success')), 5000);
//     await alertElem.getText().then(function(text) {
//     console.log(`Alert success text is: ${text}`);
//     });

//     await driver.quit();
// };
// testWaits();


// *********************** Implicit wait *******************************

const {Builder, By, until} = require('selenium-webdriver'); 
async function testWaits() {
    const driver = new Builder().forBrowser('chrome').build();
    await driver.manage().setTimeouts( { implicit: 10000 } );

    await driver.get('https://library-app.firebaseapp.com/');    
    await driver.findElement(By.css('input')).sendKeys('test@gmail.com');    
    await driver.findElement(By.css('.btn')).click();

    await driver.findElement(By.css('.alert-success')).getText().then(function(text) {
         console.log(`Alert success text is: ${text}`);	// error
    });
    await driver.quit();
};
testWaits();