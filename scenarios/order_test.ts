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



    let userData = new User;
    let productData = new Product;


    loginPage.open();
    loginPage.login(userData);

    productPage.openProductCard().waitForOpened().addProductToCart();
    productPage.waitForVisible().assertNumberOfProducts(productData).goToCart();

    cartPage.waitForOpened().assertProduct(productData).completeProduct();

    checkoutFirstPage.waitForOpened().fillAddress(userData);

    checkoutSecondPage.waitForOpened().assertProduct(productData).checkProduct();

    checkoutCompletePage.waitForOpened().assertCompleteOrder().completeOrder();

    inventoryPage.waitForOpened();

}).tag("test1")

After(async ({I}) => {
    await I.say("Test ended");
})
