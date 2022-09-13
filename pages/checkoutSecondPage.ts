import Locator = CodeceptJS.Locator;
import Page from "./page";
import Product from "../data/productFactory";

const { I } = inject();

class CheckoutSecondPage extends Page {

    private checkoutNameOfProduct: Locator = locate ("//div[contains(text(),'Sauce Labs Fleece Jacket')]").as("Product Name");
    private checkoutPriceOfProduct: Locator = locate ("//div[contains(@class,'inventory_item_price')]").as("Product Price");
    private finishButton: Locator = locate ("//button[contains(@id,'finish')]").as("Finish Button");
    private checkoutNameOfProduct2: Locator = locate ("//div[contains(text(),'Sauce Labs Backpack')]");
    private checkoutPriceOfProduct2: Locator = locate ("//div[contains(@class,'inventory_item_price')]");
    private checkoutNameOfProduct3: Locator = locate ("//div[contains(text(),'Sauce Labs Bolt T-Shirt')]");
    private checkoutPriceOfProduct3: Locator = locate ("//div[contains(@class,'inventory_item_price')]");


    constructor() {
        super("/checkout-step-two");
    }


    waitForOpened () : CheckoutSecondPage {
        super.waitForOpened();
        return this;
    }

    assertProduct (name1, cost1) : CheckoutSecondPage {
        I.see(name1, this.checkoutNameOfProduct);
        I.see(cost1, this.checkoutPriceOfProduct);
        return this;
    }

    assertProduct2 (productData: Product) : CheckoutSecondPage {
        I.see(productData.name2, this.checkoutNameOfProduct2);
        I.see(productData.cost2, this.checkoutPriceOfProduct2);
        return this;
    }

    assertProduct3 (productData: Product) : CheckoutSecondPage {
        I.see(productData.nameThirdProduct, this.checkoutNameOfProduct3);
        I.see(productData.costThirdProduct, this.checkoutPriceOfProduct3);
        return this;
    }

    checkProduct () : void {
        I.click(this.finishButton);
    }

}

export = new CheckoutSecondPage;
