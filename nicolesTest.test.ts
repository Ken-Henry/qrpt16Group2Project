import { NicolesPage } from "./nicolesPage";
const spice = new NicolesPage();
const fs = require('fs')

test('Shipping Rate', async () => {
    await spice.navigate();
    await spice.click(spice.spicesBlendsMenu);
    await spice.click(spice.newProducts);
    await spice.click(spice.saltedCaramel);
    await spice.click(spice.addToCart);
    await spice.click(spice.checkOut);
    await spice.click(spice.address1);
    await spice.search('123 Bradford');
    await spice.click(spice.cityField);
    await spice.searchcity('Belton');
    await spice.click(spice.stateField);
    await spice.click(spice.selectState);
    await spice.click(spice.zipCode);
    await spice.searchzip(64078);
    await fs.writeFile(`${__dirname}/shipChgs.png`, 
        await spice.driver.takeScreenshot(), "base64",    (e) => {
            if(e) console.error(e)
            else console.log('page saved')    
});
});
test('Store Directory', async () => {
    await spice.click(spice.store);
    await spice.click(spice.storeDir);
    await spice.click(spice.nmLocation);
    await fs.writeFile(`${__dirname}/storeNM.png`, 
    await spice.driver.takeScreenshot(), "base64",    (e) => {
            if(e) console.error(e)
            else console.log('page saved') 
});
    await spice.driver.quit()
});