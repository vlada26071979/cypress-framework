import { CartPageLocators } from "./locators/cartPageLocators";


class CartPage extends CartPageLocators {

    subscribe(email) {
        cy.get(this.inputSubscribeEmail).type(email);
        cy.get(this.buttonSubscribe).click();
    };

    verifyProductIsDisplayed(productName) {
        cy.contains(productName).should('be.visible');
    }

    verifyCartHasCorrectQuantity(expectedQuantity) {
        cy.get(this.buttonQuantity).should('have.text', expectedQuantity);
    }

};




export const cartPage = new CartPage();