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

   addProductToCart(productLocator) {
      cy.contains('p', productLocator)
      .parents(this.divProductInfo)
      .find(this.buttonAddToCart)
      .click({force: true});
   };

   clickContinueShopping() {
      cy.contains(this.buttonContinueShopping).click();
   }

   clickViewCart() {
      cy.contains(this.linkViewCart).click('topRight');
   }

   clickViewProduct() {
      cy.contains(this.linkViewProductFirst).click();
   }

};


export const productsPage = new ProductsPage()