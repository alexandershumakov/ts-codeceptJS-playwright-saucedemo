const {faker} = require('@faker-js/faker');
const Product = require('../data/productFactory.ts');
const User = require('../data/userFactory.ts');

Feature('Order');

Before (({I, loginPage}) => {
    loginPage.waitForOpened2();
    loginPage.login("standard_user", secret('secret_sauce'));
})

Scenario("first test", ({I,
                             loginPage,
                             productPage,
                             cartPage,
                             checkoutFirstPage,
                             checkoutSecondPage,
                             checkoutCompletePage,
                             inventoryPage} ) => {

    let newProductData = new Product;
    let productData = newProductData.build();
    let newUserData = new User;
    let userData = newUserData.build();

    productPage.openProductCard();
    productPage.waitForOpened();
    productPage.addProductToCart();
    productPage.waitForVisible();
    productPage.assertNumberOfProducts(productData);
    productPage.goToCart();

    cartPage.waitForOpened();
    cartPage.assertProduct(productData);
    cartPage.completeProduct();

    checkoutFirstPage.waitForOpened();
    checkoutFirstPage.fillAddress(userData);

    checkoutSecondPage.waitForOpened();
    checkoutSecondPage.assertProduct(productData);
    checkoutSecondPage.checkProduct();

    checkoutCompletePage.waitForOpened()
    checkoutCompletePage.assertCompleteOrder();
    checkoutCompletePage.completeOrder();

    inventoryPage.waitForOpened();

}).tag("test1")

After(async ({I}) => {
    await I.say("Test ended");
})
