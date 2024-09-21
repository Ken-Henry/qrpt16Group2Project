import { By } from "selenium-webdriver";
import { BasePage } from './basepage';

export class savorShop extends BasePage {
    cart: By = By.xpath('//path[@d="M27.5762 7.91198C27.4058 7.69053 27.1418 7.55425 26.8607 7.55425H21.1796L17.0827 0.527362C16.8357 0.10149 16.2821 -0.0433063 15.8562 0.203699C15.4303 0.450705 15.2855 1.00434 15.5325 1.43021L19.1013 7.54573H9.16149L12.7303 1.43021C12.9773 1.00434 12.8325 0.450705 12.4066 0.203699C11.9808 -0.0433063 11.4271 0.0929728 11.1801 0.527362L7.08324 7.55425H1.39359C1.11251 7.55425 0.848471 7.68201 0.678122 7.91198C0.507773 8.13344 0.456669 8.43155 0.524808 8.69559L4.11917 21.4292C4.22989 21.821 4.57911 22.085 4.98795 22.085H23.2579C23.6582 22.085 24.0159 21.821 24.1266 21.4292L27.721 8.69559C27.7976 8.42303 27.7465 8.13344 27.5762 7.91198ZM22.585 20.2878H5.66934L2.58603 9.35143H6.03559L4.90277 11.2934C4.65577 11.7193 4.80056 12.2729 5.22644 12.5199C5.37123 12.6051 5.52455 12.6392 5.67786 12.6392C5.98449 12.6392 6.2826 12.4773 6.45295 12.1963L8.11385 9.34291H20.149L21.8099 12.1963C21.9802 12.4858 22.2784 12.6392 22.585 12.6392C22.7383 12.6392 22.8916 12.5966 23.0364 12.5199C23.4623 12.2729 23.6071 11.7193 23.3601 11.2934L22.2272 9.35143H25.6768L22.585 20.2878Z"]');
    search: By = By.xpath('//input[@class="form-field-input live-search-form-field form-field-mobile-custom snize-input-style"][2]');
    freeShip: By = By.css('announcement-bar-link');
    coupon: By = By.id('email_51606746');
    storeLocator: By = By.css('.home-store');
    checkout: By = By.name('[name="checkout"]')
    searchBtn: By = By.xpath('(//button[@class="live-search-button custom-live-search-button mdc-ripple-surface mdc-ripple-upgraded"])[1]');
    signUp: By = By.xpath('//button[@class="needsclick go1608708250 kl-private-reset-css-Xuajs1"]');
    locationSearch: By = By.xpath('.mapboxgl-ctrl-geocoder--input');
    findStoreBtn: By = By.xpath('//button[text()="Find stores near my current location"]');
    popUp: By = By.xpath('//button[@class = "needsclick klaviyo-close-form go260142404 kl-private-reset-css-Xuajs1"]');

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