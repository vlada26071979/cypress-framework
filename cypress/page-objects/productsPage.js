import { ProductsPageLocators } from './locators/productsPageLocators'

class ProductsPage extends ProductsPageLocators {

   clickViewFirstProduct() {
        cy.contains(this.linkViewProductFirst).click()
   };

   verifyAllProductsAreDisplayed(expectedProductsNumber, locator) {
   cy.log(`🔹 Verifying that all ${expectedProductsNumber} products are displayed`)
   cy.get(locator)
   .should('be.visible')
   .should('have.length', expectedProductsNumber);
   };

}



export const productsPage = new ProductsPage()