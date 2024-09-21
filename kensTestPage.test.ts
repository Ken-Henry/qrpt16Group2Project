import { savorShop } from "./KensPage";
const spice = new savorShop();

test ('Checking cart for product', async () => {
    await spice.navigate();
    await spice.click(spice.cart);
    await spice.click(spice.checkout);
    await spice.driver.navigate().back();

});

test ('Search for item', async () => {
    await spice.navigate();
    await spice.click(spice.search);
    await spice.click(spice.searchBtn)
    await spice.driver.navigate().back();

});

test ('10% coupon', async () => {
    await spice.navigate();
    await spice.scrollToElement(spice.coupon)
    await spice.click(spice.coupon);
    await spice.click(spice.signUp)
    await spice.driver.navigate().back();

});

test ('Store Locator feature', async () => {
    await spice.navigate();
    await spice.click(spice.storeLocator);
    await spice.click(spice.locationSearch);
    await spice.click(spice.findStoreBtn)
    await spice.driver.navigate().back();
    await spice.driver.quit();

});

