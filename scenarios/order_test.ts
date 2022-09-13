const {faker} = require('@faker-js/faker');
const Product = require('../data/productFactory.ts');
const User = require('../data/userFactory.ts');

Feature('Order');

Scenario("first test", ({I,
                             loginPage,
                             productPage,
                             cartPage,
                             checkoutFirstPage,
                             checkoutSecondPage,
                             checkoutCompletePage,
                             inventoryPage} ) => {



    //let userData = new User;
    //let productData = new Product;


    loginPage.open();
    loginPage.login("standard_user", secret("secret_sauce"));

    productPage.openProductCard().waitForOpened().addProductToCart();
    productPage.waitForVisible().goToCart();

    cartPage.waitForOpened().assertProduct("Sauce Labs Fleece Jacket", "$49.99").completeProduct();

    checkoutFirstPage.waitForOpened().fillAddress(faker.name.firstName(), faker.name.lastName(), faker.address.zipCode());

    checkoutSecondPage.waitForOpened().assertProduct("Sauce Labs Fleece Jacket", "$49.99").checkProduct();

    checkoutCompletePage.waitForOpened().assertCompleteOrder().completeOrder();

    inventoryPage.waitForOpened();

}).tag("test1")

After(async ({I}) => {
    await I.say("Test ended");
})
