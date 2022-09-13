import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './scenarios/*_test.ts',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://www.saucedemo.com/',
      show: true,
      browser: 'chromium',
      restart: false,
      timeout: 10000,
      fullPageScreenshots: true,
      uniqueScreenshotNames: false,
      waitForAction: 500,
      //waitForNavigation: 'networkidle',
      getPageTimeout: 30000,
      waitForTimeout: 30000,
      windowSize: '1920x1080'
    }
  },
  include: {
    I: './steps_file.ts',
    loginPage: './pages/loginPage.ts',
    cartPage: './pages/cartPage.ts',
    checkoutCompletePage: './pages/checkoutCompletePage.ts',
    checkoutFirstPage: './pages/checkoutFirstPage.ts',
    checkoutSecondPage: './pages/checkoutSecondPage.ts',
    inventoryPage: './pages/inventoryPage.ts',
    productPage: './pages/productPage.ts',
  },
  name: 'tsSaucedemo',
  bootstrap: null,
  mocha: {},
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  },
  require: ['ts-node/register']
}