import { NicolesPage } from "./nicolesPage";
const spice = new NicolesPage();

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
    await spice.searchzip('64078');
    

})







await page.driver.quit()