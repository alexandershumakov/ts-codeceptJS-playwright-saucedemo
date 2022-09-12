import Locator = CodeceptJS.Locator;
import Page from "./page";
import Product from "../data/productFactory";

const productNames = require("./inventoryPage");
const { I } = inject();

class InventoryPage extends Page {

    private dropdownButton: Locator = locate ("//select[contains(@class,'product_sort_container')]").as("Dropdown");
    private nameOfFirstProduct: Locator = locate ("//div[contains(text(),'Test.allTheThings() T-Shirt (Red)')]").as("First Product");
    private nameOfSecondProduct: Locator = locate ("//div[contains(text(),'Sauce Labs Onesie')]").as("Second Product");
    private firstProductButton: Locator = locate ("//button[contains(@id,'add-to-cart-test.allthethings()-t-shirt-(red)')]").as("Add First Product");
    private secondProductButton: Locator = locate ("//button[contains(@id,'add-to-cart-sauce-labs-onesie')]").as("Add Second Button");
    private cartLink: Locator = locate ("//a[contains(@class,'shopping_cart_link')]").as("Cart Link");
    private productsCounter: Locator = locate ("//span[contains(@class,'shopping_cart_badge')]").as("Products Counter");
    private firstProductButton2: Locator = locate ("//button[contains(@id,'add-to-cart-sauce-labs-backpack')]");
    private secondProductButton2: Locator = locate ("//button[contains(@id,'add-to-cart-sauce-labs-bike-light')]");
    private nameOfFirstProduct2: Locator = locate ("//div[contains(text(),'Sauce Labs Backpack')]");
    private nameOfSecondProduct2: Locator = locate ("//div[contains(text(),'Sauce Labs Bike Light')]");
    private productButton: Locator = locate ("//button[contains(@id,'add-to-cart-sauce-labs-bolt-t-shirt')]");

    constructor() {
        super("/inventory");
    }

    waitForOpened () : InventoryPage {
        super.waitForOpened();
        return this;
    }

    sortAllProducts () : InventoryPage {
        I.selectOption(this.dropdownButton, "Name (Z to A)");
        return this;
    }

    assertProducts (productData: Product) : InventoryPage {
        I.see(productData.firstProduct, this.nameOfFirstProduct);
        I.see(productData.secondProduct, this.nameOfSecondProduct);
        return this;
    }

    assertProducts2 (productData: Product) : InventoryPage {
        I.see(productData.firstProduct2, this.nameOfFirstProduct2);
        I.see(productData.secondProduct2, this.nameOfSecondProduct2);
        return this;
    }

    assertProducts3 (productData: Product) : InventoryPage {
        I.see(productData.nameFirstProduct, this.nameOfFirstProduct2);
        I.see(productData.nameSecondProduct, this.nameOfSecondProduct2);
        return this;
    }


    addProducts () : void {
        I.click(this.firstProductButton);
        I.click(this.secondProductButton);
    }

    addProducts2 () : void {
        I.click(this.firstProductButton2);
        I.click(this.secondProductButton2);
    }

    addProduct3 () : void {
        I.click(this.productButton);
    }

    waitForVisible () : InventoryPage {
        I.waitForVisible(this.cartLink);
        return this;
    }

    assertCountOfProducts (productData: Product) : InventoryPage {
        // @ts-ignore
        I.see(this.productsCounter, productData.countOfProducts);
        return this;
    }

    goToCart () : void {
        I.click(this.cartLink);
    }

}

export = new InventoryPage;