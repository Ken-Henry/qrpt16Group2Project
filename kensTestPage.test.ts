import { savorShop } from "./KensPage";
const spice = new savorShop();
const fs = require('fs')

test ('Checking cart for product', async () => {
    await spice.navigate();
    await spice.click(spice.popUp); 
    await spice.click(spice.seasoning); 
    await spice.click(spice.addToCart);
    await spice.click(spice.checkout);
    await spice.driver.navigate().back();
    await spice.click(spice.cart); 
   

});

test ('Search for item', async () => {
    await spice.navigate();
    await spice.setInput(spice.search, "Pumpkin Pie Spice\n");
    await spice.click(spice.pumpkinPie); 
    await spice.driver.navigate().back();
    
});

test ('10% coupon', async () => {
    await spice.navigate();
    await spice.scrollToElement(spice.coupon);
    await spice.setInput(spice.coupon, "spiceOfLife@gmail.com");
    await fs.writeFile(`${__dirname}/coupon.png`, 
        await spice.driver.takeScreenshot(), "base64", (e) => {
                if(e) console.error(e)
                else console.log('page saved') 
    });
    await spice.driver.navigate().back();
});

test ('Store Locator feature', async () => {
    await spice.navigate();
    await spice.click(spice.storeLocator);
    await spice.setInput(spice.locationSearch, "Atlanta\n");
    await spice.click(spice.findStoreBtn)
    await spice.driver.navigate().back();
    await spice.driver.quit();
});