import { By } from "selenium-webdriver";
import { BasePage } from './basepage';

export class savorShop extends BasePage {
    cart: By = By.xpath('//span[text()="Cart"]')
    search: By = By.xpath('(//input[@name="q"])[1]')
    freeShip: By = By.css('announcement-bar-link');
    coupon: By = By.id('email_51606746');
    storeLocator: By = By.css('.home-store');
    checkout: By = By.name('checkout')
    searchBtn: By = By.xpath('(//button[@class="live-search-button custom-live-search-button mdc-ripple-surface mdc-ripple-upgraded"])[1]');
    signUp: By = By.xpath('//button[@class="needsclick go1608708250 kl-private-reset-css-Xuajs1"]');
    locationSearch: By = By.xpath('//input[@class="mapboxgl-ctrl-geocoder--input"]');
    findStoreBtn: By = By.xpath('//button[text()="Find stores near my current location"]');
    popUp: By = By.xpath('//button[@class = "needsclick klaviyo-close-form go260142404 kl-private-reset-css-Xuajs1"]');
    seasoning: By = By.xpath('(//img[@class="productitem--image-primary"])[1]');
    addToCart: By = By.xpath ('//span[@class = "atc-button--text"]');
    pumpkinPie: By = By.xpath('(//span[@class="snize-thumbnail"])[1]'); 
    constructor(){
        super({url:'https://www.savoryspiceshop.com/'});
    };

    async scrollToElement(elementBy: By) {
        const scrollThing = await this.getElement(elementBy);
        await this.driver.actions()
        .move({origin: scrollThing})
        .perform()
    };
};