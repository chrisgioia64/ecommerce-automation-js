

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert() {
        return $('#flash');
    }

    get logoutLink() {
        return $("=Logout");
    }

    get loginLink() {
        return $("*=Login")
    }

    async logoutLinkExists() {
        const linkExists = await $('=Logout').isExisting();
        return linkExists;
    }

    async logoutIfPossible() {
        if (this.logoutLinkExists()) {
            const link = $('=Logout');
            link.click();
            console.log("LOGOUT: we logged out");
        } else {
            console.log("LOGOUT: we did not log out")
        }
    }
}

module.exports = new SecurePage();
