import { ProductsPageLocators } from './locators/productsPageLocators'

class ProductsPage extends ProductsPageLocators {

   clickViewFirstProduct() {
        cy.contains(this.linkViewProductFirst).click()
   };

   verifyAllProductsAreDisplayed() {
    cy.log('🔹 Verifying that all 34 products are displayed')
    cy.get(this.allProducts)
    .should('be.visible')
    .should('have.length', 34);
   };

}



export const productsPage = new ProductsPage()