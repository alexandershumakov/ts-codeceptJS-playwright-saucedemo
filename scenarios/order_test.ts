const {faker} = require('@faker-js/faker');
import User from "../data/userFactory";
import Product from "../data/productFactory";

Feature('Order');

Before (({I, loginPage}) => {
    I.login("standard_user", secret('secret_sauce'));
})

Scenario("1 test", ({I,
                             loginPage,
                             productPage,
                             cartPage,
                             checkoutFirstPage,
                             checkoutSecondPage,
                             checkoutCompletePage,
                             inventoryPage} ) => {



    let newUser = new User;
    let userData = newUser.build();

    let newProduct = new Product;
    let productData = newProduct.build();


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
