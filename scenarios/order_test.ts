const {faker} = require('@faker-js/faker');
import User from "../data/userFactory";
import Product from "../data/productFactory";

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
    productPage.waitForVisible().goToCart();

    cartPage.waitForOpened().assertProduct(productData).completeProduct();

    checkoutFirstPage.waitForOpened().fillAddress(userData);

    checkoutSecondPage.waitForOpened().assertProduct(productData).checkProduct();

    checkoutCompletePage.waitForOpened().assertCompleteOrder().completeOrder();

    inventoryPage.waitForOpened();

}).tag("test1")



After(async ({I}) => {
    await I.say("Test ended");
})
