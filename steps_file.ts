// in this file you can append custom step methods to 'I' object


const loginPage = require("./pages/loginPage");
module.exports = function() {
    return actor({

        login: function (username,password) {
            this.amOnPage('/');
            loginPage.login(username,password);
        }

        // Define custom steps here, use 'this' to access default methods of I.
        // It is recommended to place a general 'login' function here.

    });
}