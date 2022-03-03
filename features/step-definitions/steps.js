const { Given, When, Then, After} = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with username (\S+) and password (\S+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^Login should be (\w+)$/, async (message) => {
    if (message == 'successful') {
        await expect(SecurePage.logoutLink).toBeExisting();
    } else if (message == 'unsuccessful') {
        await expect(SecurePage.loginLink).toBeExisting();
    }
});

// Taken from StackOverflow
// function delay(t, val) {
//     return new Promise(function(resolve) {
//         setTimeout(function() {
//             resolve(val);
//         }, t);
//     });
// }

// Then(/^I should see a flash message saying (.*)$/, async (message) => {
//     await expect(SecurePage.flashAlert).toBeExisting();
//     await expect(SecurePage.flashAlert).toHaveTextContaining(message);
// });


After(async function (scenario) {
    await SecurePage.logoutIfPossible();
})