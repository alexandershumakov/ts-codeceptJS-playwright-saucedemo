import Locator = CodeceptJS.Locator;
import Page from "./page";

const { I } = inject();

class LoginPage extends Page {

    private userNameField: Locator = locate ('input#user-name').as("User Name");
    private passwordField: Locator = locate ('input#password').as("Password");
    private loginButton: Locator = locate ('input#login-button').as("Login Button");

    constructor() {
        super ("/");
    }

    waitForOpened () : LoginPage {
        super.waitForOpened();
        return this;
    }

    waitForOpened2 () : LoginPage {
        I.amOnPage('/');
        return this;
    }

    login (username, password): LoginPage {
        I.fillField(this.userNameField, username);
        I.fillField(this.passwordField, password);
        I.click(this.loginButton);
        return this;
    }

}

export = new LoginPage;