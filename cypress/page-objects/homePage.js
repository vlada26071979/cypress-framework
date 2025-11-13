class HomePage {

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
        cy.contains('Products').click()
        cy.contains('All Products').should('be.visible')
    }
};










export const homePage = new HomePage()
