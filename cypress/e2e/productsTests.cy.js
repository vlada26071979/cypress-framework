const { cartPage } = require("../page-objects/cartPage");
const { homePage } = require("../page-objects/homePage");
const { productDetailsPage } = require("../page-objects/productDetailsPage");
const { productsPage } = require("../page-objects/productsPage");

beforeEach('Open application', () => {
    cy.openApplication(); 
});


describe('Test cases on the Products page', () => {
    it('Verify all products are displayed and verify first product details are displayed', () => {
        homePage.goToProductsPage();
        productsPage.verifyAllProductsAreDisplayed(34, productsPage.allProducts);
       
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

    it('Verify user can add products to cart', () => {
        homePage.goToProductsPage();

        productsPage.addProductToCart(productsPage.productBlueTop);
        productsPage.clickContinueShopping();
        productsPage.addProductToCart(productsPage.productMenTshirt)

        cy.contains('Your product has been added to cart.').should('be.visible');

        productsPage.clickViewCart();
        cy.contains('Blue Top').should('be.visible');
        cy.contains('Men Tshirt').should('be.visible');
        
        // still need to wrap these into methods
        cy.get('td.cart_quantity button').should('have.length', 2);
        cy.get('td.cart_quantity button').each((quantityBtn) => {
            cy.wrap(quantityBtn).should('be.visible')

        });

        cy.get('p.cart_total_price').each((totalPrice) => {
            cy.wrap(totalPrice).should('be.visible')
        })
    });

    it.only('Verify product quantity in Cart', () => {
        homePage.goToProductsPage();

        productsPage.clickViewProduct();
        productDetailsPage.verifyYouAreOnProductDetailsPage();
        productDetailsPage.enterProductQuantity(4);
        productDetailsPage.clickAddToCart();
        productDetailsPage.clickViewCart();

        cartPage.verifyProductIsDisplayed(cartPage.productBlueTop);
        cartPage.verifyCartHasCorrectQuantity(4);

        // cy.get('#quantity').clear().type(4)
    })

});