import { By } from "selenium-webdriver";
import {BasePage} from './basepage'
const fs = require('fs')

export class NicolesPage extends BasePage {
    popUpClose: By = By.xpath('//button[@class = "needsclick klaviyo-close-form go260142404 kl-private-reset-css-Xuajs1"]'); 
    spicesBlendsMenu: By = By.xpath('(//span[@class="navmenu-icon navmenu-icon-depth-1"])[1]'); 
    newProducts: By = By.xpath ('(//li[@class = "navmenu-item navmenu-id-new-products"])[1]');
    saltedCaramelSC: By = By.xpath('(//img)[11]'); 
    saltedCaramel: By = By.xpath('(//img)[10]');
    addToCart: By = By.xpath ('//span[@class = "atc-button--text"]');
    checkOut: By = By.xpath ('(//button[@class = "button full"])[6]');
    address1: By = By.xpath ('//input[@id = "shipping-address1"]');
    cityField: By = By.xpath ('//input[@id = "TextField3"]');
    stateField: By = By.xpath ('//select[@name = "zone"]');
    selectState: By = By.xpath ('//option[text() = "Missouri"]');
    zipCode: By = By.xpath ('//input[@id = "TextField4"]');
    store: By = By.xpath ('(//h6[@class = "header-item"])[1]');
    storeDir: By = By.xpath ('//a[text() = "Store Directory"]');
    nmLocation: By = By.xpath ('(//a[@class = "location-list"])[11]');
    sauces: By = By.xpath ('(//li[@class = "navmenu-item navmenu-id-sauces"])[1]')
    cueGlue: By = By.xpath ('(//a[@class = "button-secondary view-product add-to-cart-custom mdc-ripple-surface mdc-ripple-upgraded"])[1]')
    checkOutCue: By = By.xpath ('(//button[@class = "button full"])[5]');

    constructor () {
        super({url: 'https://www.savoryspiceshop.com/'});
    };
    async search(streetAddress: string) {
        return this.setInput(this.address1, `${streetAddress}`); 
};
    async searchcity(city: string) {
    return this.setInput(this.cityField, `${city}`); 
};
    async searchzip(zipCode: string) {
    return this.setInput(this.zipCode, `${zipCode}`); 
};
async scrollToElement(elementBy: By) {
    const scrollThing = await this.getElement(elementBy); 
    await this.driver.actions()
    .move({origin: scrollThing})
    .perform()
}; 
}