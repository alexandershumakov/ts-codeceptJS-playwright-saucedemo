import Locator = CodeceptJS.Locator;
import Page from "./page";
import CartPage from "./cartPage";
import Product from "../data/productFactory";
const { I } = inject();

class ProductPage extends Page {

    private productName: Locator = locate ("//div[contains(text(),'Sauce Labs Fleece Jacket')]").as("Product name");
    private productAddButton: Locator = locate ("//button[contains(@id,'add-to-cart-sauce-labs-fleece-jacket')]").as("Add Product Button");
    private cartBadge: Locator = locate ("//span[contains(@class,'shopping_cart_badge')]").as("Cart Counter");
    private cartLink: Locator = locate ("//a[contains(@class,'shopping_cart_link')]").as("Cart Link");

    constructor() {
        super("/inventory-item.html?id=5");
    }

    waitForOpened () : ProductPage {
        super.waitForOpened();
        return this;
    }

    openProductCard () : ProductPage {
        I.click(this.productName);
        return this;
    }

    addProductToCart () : void {
        I.click(this.productAddButton);
    }

    waitForVisible () : ProductPage {
        I.waitForVisible(this.cartLink);
        return this;
    }

    assertNumberOfProducts (productData: Product) : ProductPage {
        // @ts-ignore
        I.see(this.cartBadge, productData.numberOfProducts);
        return this;
    }

    goToCart () : void {
        I.click(this.cartLink);
    }

}

export = new ProductPage;