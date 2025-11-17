import { ProductsPageLocators } from './locators/productsPageLocators'

class ProductsPage extends ProductsPageLocators {

   clickViewFirstProduct() {
        cy.contains(this.linkViewProductFirst).click()
   };

   verifyAllProductsAreDisplayed(expectedProductsNumber) {
    cy.log(`🔹 Verifying that all ${expectedProductsNumber} products are displayed`)
    cy.get(this.allProducts)
    .should('be.visible')
    .should('have.length', expectedProductsNumber);
   };

}



export const productsPage = new ProductsPage()