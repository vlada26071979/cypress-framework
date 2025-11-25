import { HomePageLocators } from "./locators/homePageLocators";

class HomePage extends HomePageLocators{

    goToLoginPage() {
        cy.contains('Signup / Login').click();
        cy.contains('New User Signup!').should('be.visible');
        cy.contains('Login to your account').should('be.visible');
    };

    goToTestCasesPage() {
        cy.contains('Test Cases').click();
    }

    goToContactUsPage() {
        cy.contains('Contact us').click();
        cy.contains('Get In Touch').should('be.visible');
    }

    goToProductsPage() {
        cy.contains('Products').click();
        cy.contains('All Products').should('be.visible');
    }

    goToCartPage() {
        cy.contains(this.linkCart).click()
        cy.contains('Cart is empty!').should('be.visible')
    }

    subscribe(email) {
        cy.get(this.inputSubscribeEmail).type(email)
        cy.get(this.buttonSubscribe).click()
    }

};



export const homePage = new HomePage()
