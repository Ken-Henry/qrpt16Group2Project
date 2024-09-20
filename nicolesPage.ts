import { By } from "selenium-webdriver";
import { BasePage } from './basePage';
const fs = require('fs')

export class NicolesPage extends BasePage {
    spicesBlendsMenu: By = By.xpath ('//li[@class="navmenu-item navmenu-basic__item navmenu-item-parent navmenu-basic__item-parent navmenu-id-spices-blends"]');
    newProducts: By = By.xpath ('(//li[@class = "navmenu-item navmenu-id-new-products"])[1]');
    saltedCaramel: By = By.xpath ('(//span[@class = "atc-button--text custom-card-button-text"])[9]');
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

    constructor () {
        super({url: 'https://www.savoryspiceshop.com/'});
    };
    async search(streetAddress: string) {
        return this.setInput(this.address1, `${streetAddress}`); 
};
    async searchcity(city: string) {
    return this.setInput(this.cityField, `${city}`); 
};
    async searchzip(zipCode: number) {
    return this.setInput(this.selectState, `${zipCode}`); 
};
    
}