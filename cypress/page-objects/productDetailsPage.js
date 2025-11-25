import { ProductDetailsPageLocators } from './locators/productDetailsPageLocators' 

class ProductDetailsPage extends ProductDetailsPageLocators {

    verifyYouAreOnProductDetailsPage() {
    cy.contains(this.linkWriteYourReview).should('be.visible')
   }

    verifyProductDetailsAreDisplayed({productName, category, price, availability, condition, brand}) {
        // console.log(productName)
        // console.log(category)
        // console.log(price)
        // console.log(availability)
        // console.log(condition)
        // console.log(brand)
        cy.contains(productName).should('be.visible')
        cy.contains(category).should('be.visible')
        cy.contains(price).should('be.visible')
        cy.contains(availability).should('be.visible')
        cy.contains(condition).should('be.visible')
        cy.contains(brand).should('be.visible')

    }

    enterProductQuantity(productQuantity) {
        cy.get(this.inputQuantity).clear().type(productQuantity)
    }

    clickAddToCart() {
        cy.contains(this.buttonAddToCart).click()
    }

    clickViewCart() {
        cy.contains(this.linkViewCart).click('topRight');
   }
}





export const productDetailsPage = new ProductDetailsPage();