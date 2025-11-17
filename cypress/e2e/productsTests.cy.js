const { homePage } = require("../page-objects/homePage");
const { productDetailsPage } = require("../page-objects/productDetailsPage");
const { productsPage } = require("../page-objects/productsPage");

beforeEach('Open application', () => {
    cy.openApplication(); 
});


describe('Test cases on the Products page', () => {
    it('Verify all products are displayed and verify first product details are displayed', () => {
        homePage.goToProductsPage();
        productsPage.verifyAllProductsAreDisplayed();
       
        productsPage.clickViewFirstProduct();
        productDetailsPage.verifyYouAreOnProductDetailsPage();

        productDetailsPage.verifyProductDetailsAreDisplayed({
            productName: 'Blue Top',
            category: 'Category: Women > Tops',
            price: 'Rs. 500',
            availability: 'In Stock',
            condition: 'New',
            brand: 'Polo'
        });
    });

});