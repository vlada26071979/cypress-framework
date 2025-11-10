class HomePage {

    goToLoginPage() {
        cy.contains('Signup / Login').click()
        cy.contains('New User Signup!').should('be.visible')
    }
}










export const homePage = new HomePage()
