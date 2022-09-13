// import {Locator} from "playwright";
// @ts-ignore
import Locator = CodeceptJS.Locator;
import * as url from "url";
import Page from "./page";
import Product from "../data/productFactory";

const { I } = inject();

// noinspection TypeScriptValidateTypes
class CartPage extends Page {

    private nameOfProduct: Locator = locate ("//div[contains(text(),'Sauce Labs Fleece Jacket')]").as("Product Name");
    private priceOfProduct: Locator = locate ("//div[contains(@class,'inventory_item_price')]").as("Product Price");
    private checkoutButton: Locator = locate ("//button[contains(@id,'checkout')]").as("Checkout Button");
    private nameOfFirstProduct: Locator = locate ("//div[contains(text(),'Test.allTheThings() T-Shirt (Red)')]").as("First Product Name");
    private nameOfSecondProduct: Locator = locate ("//div[contains(text(),'Sauce Labs Onesie')]").as("Second Product Name");
    private removeButtonForFirstProduct: Locator = locate ("//button[contains(@id,'remove-sauce-labs-onesie')]").as("Remove Button");
    private removeButtonForSecondProduct: Locator = locate ("//button[contains(@id,'remove-test.allthethings()-t-shirt-(red)')]").as("Remove Button");
    private cartBadge: Locator = locate ("//span[contains(@class,'shopping_cart_badge')]").as("Cart Counter");
    private menuButton: Locator = locate ("//button[contains(@id,'react-burger-menu-btn')]").as("Menu Button");
    private logoutLink: Locator = locate ("//a[contains(@id,'logout_sidebar_link')]").as("Logout Link");
    private removeButtonForSecondProduct2: Locator = locate ("//button[contains(@id,'remove-sauce-labs-bike-light')]");
    private nameOfFirstProduct2: Locator = locate ("//div[contains(text(),'Sauce Labs Backpack')]");
    private nameOfSecondProduct2: Locator = locate ("//div[contains(text(),'Sauce Labs Bike Light')]");
    private nameOfThirdProduct2: Locator = locate ("//div[contains(text(),'Sauce Labs Bolt T-Shirt')]");
    private continueShoppingButton: Locator = locate ("//button[contains(@id,'continue-shopping')]");
    private completeTitle: Locator = locate ("//h2[contains(text(),'THANK YOU FOR YOUR ORDER')]");
    private backToProductsButton: Locator = locate ("//button[contains(@id,'back-to-products')])");

    constructor() {
        super("/cart");
    }

    waitForOpened () : CartPage {
        super.waitForOpened();
        return this;
    }

    assertCompleteOrder () : CartPage {
        return I.see("THANK YOU FOR YOUR ORDER", this.completeTitle);
    }

    completeOrder () : void {
        I.click(this.backToProductsButton);
    }

    assertProduct (productData: Product) : CartPage {
        I.see(productData.name1, this.nameOfProduct);
        I.see(productData.cost1, this.priceOfProduct);
        return this;
    }

    completeProduct () : void {
        I.click(this.checkoutButton);
    }

    assertTwoProducts (productData: Product) : CartPage {
        I.see(productData.firstProduct, this.nameOfFirstProduct);
        I.see(productData.secondProduct, this.nameOfSecondProduct);
        return this;
    }

    assertTwoProducts2 (productData: Product) : CartPage {
        I.see(productData.firstProduct2, this.nameOfFirstProduct2);
        I.see(productData.secondProduct2, this.nameOfSecondProduct2);
        return this;
    }

    assertTwoProducts3 (productData: Product) : CartPage {
        I.see(productData.nameFirstProduct, this.nameOfFirstProduct2);
        I.see(productData.nameThirdProduct, this.nameOfThirdProduct2);
        return this;
    }

    removeFirstProduct () : void {
        I.click(this.removeButtonForFirstProduct);
    }

    assertCountOfProducts (productData: Product) : CartPage {
        I.see(productData.countOfProducts2, this.cartBadge);
        return this;
    }

    removeSecondProduct () : void {
        I.click(this.removeButtonForSecondProduct);
    }

    removeSecondProduct2 () : void {
        I.click(this.removeButtonForSecondProduct2);
    }

    returnToProductPage () : void {
        I.click(this.menuButton);
        I.click(this.logoutLink);
    }

    continueShopping () {
        I.click(this.continueShoppingButton);
    }
}

export = new CartPage;