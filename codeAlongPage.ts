import { By } from "selenium-webdriver";
Import { BasePage } from "./basePage";
const fs = required('fs')

export class CodeAlongPage extends BasePage {
    youtube: By = By.xpath('(//a[@*])[261]');

    constructor () {
        super({url: 'https://www/nasa.gov/'});
    };

    async scrollToElement(elementBy: By) {
        const scrollThing = await this.getElement(elementBy);
        await this.driver.actions()
        .move({origin: scrollThing})
        .perform()
    };

    async tabs()

}