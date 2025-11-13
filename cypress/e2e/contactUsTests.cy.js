const { contactUsPage } = require("../page-objects/contactUsPage");
const { homePage } = require("../page-objects/homePage");

beforeEach('Open application', () => {
    cy.openApplication(); 
});



describe('Test cases on the Contact us page', () => {
    it('Verify contact us form and file upload', () => {
        homePage.goToContactUsPage();
        contactUsPage.populateContactUsForm({
            name: 'Vladimir Djordjevic',
            email: 'vlada79@gmail.com',
            subject: 'file upload',
            message: "Hi There, how are you?"
        })
        contactUsPage.uploadFile('test.txt')
        cy.contains('Success! Your details have been submitted successfully.').should('be.visible')
        cy.get(contactUsPage.buttonHome).click()
        cy.contains('Features Items').should('be.visible')

        
    })
})