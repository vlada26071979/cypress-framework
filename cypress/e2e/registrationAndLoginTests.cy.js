const { homePage } = require("../page-objects/homePage")
const { loginSignupPage } = require("../page-objects/signupLoginPage")

beforeEach('Open application', () => {
    cy.openApplication()
  
    
})


describe('Registration tests', () => {
    it('Verify user registration process', () => {
        homePage.goToLoginPage()
        loginSignupPage.registerNewUser('vlada79', 'vlada79@gmail.com', 'partizan', 'Vladimir', 'Djordjevic', 'Hawkins St. 41',
            'United States', 'Indiana', 'Hawkins', '46001', '399621456'
        )
    })

    it('Verify you can not register user with existing email address', () => {
        homePage.goToLoginPage()
        cy.get(loginSignupPage.inputSignupName).type("vlada79")
        cy.get(loginSignupPage.inputSignupЕmail).type("vlada79@gmail.com")
        cy.get(loginSignupPage.buttonSignup).click()
        cy.contains('Email Address already exist!').should('be.visible')
    })
})