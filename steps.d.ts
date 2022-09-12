/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file');
type loginPage = typeof import('./pages/loginPage');
type cartPage = typeof import('./pages/cartPage');
type checkoutCompletePage = typeof import('./pages/checkoutCompletePage');
type checkoutFirstPage = typeof import('./pages/checkoutFirstPage');
type checkoutSecondPage = typeof import('./pages/checkoutSecondPage');
type inventoryPage = typeof import('./pages/inventoryPage');
type productPage = typeof import('./pages/productPage');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, loginPage: loginPage, cartPage: cartPage, checkoutCompletePage: checkoutCompletePage, checkoutFirstPage: checkoutFirstPage, checkoutSecondPage: checkoutSecondPage, inventoryPage: inventoryPage, productPage: productPage }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
