import Locator = CodeceptJS.Locator;
import Page from "./page";
import User from "../data/userFactory";

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

    login (userData: User): void {
        I.fillField(this.userNameField, userData.username);
        I.fillField(this.passwordField, secret(userData.password));
        I.click(this.loginButton);
    }

}

export = new LoginPage;