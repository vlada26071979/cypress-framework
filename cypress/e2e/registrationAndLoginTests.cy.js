const { homePage } = require("../page-objects/homePage")
const { loginSignupPage } = require("../page-objects/signupLoginPage")

beforeEach('Open application', () => {
    cy.openApplication(); 
    homePage.goToLoginPage();   
});

describe('Registration and Login tests', () => {
    it('Verify user registration process', () => {
        loginSignupPage.registerNewUser('vlada79', 'vlada79@gmail.com', 'partizan', 'Vladimir', 'Djordjevic', 'Hawkins St. 41',
            'United States', 'Indiana', 'Hawkins', '46001', '399621456'
        );
    });

    it('Verify you can not register user with existing email address', () => {
        cy.get(loginSignupPage.inputSignupName).type("vlada79");
        cy.get(loginSignupPage.inputSignupЕmail).type("vlada79@gmail.com");
        cy.get(loginSignupPage.buttonSignup).click();
        cy.contains('Email Address already exist!').should('be.visible');
    });

    it('Verify user logout', () => {
       loginSignupPage.loginAndLogout('vlada79@gmail.com', 'partizan');
       cy.contains('Login to your account').should('be.visible');
    });

    it('Verify user login with correct email and password', () => {
        loginSignupPage.loginToApplicationAndDeleteAccount('vlada79@gmail.com', 'partizan');
        cy.contains('Account Deleted!').should('be.visible');
    });

    it('Verify that user can not login with incorrect email and password', () => {
        cy.get(loginSignupPage.inputLoginEmail).type('nina2014@gmail.com');
        cy.get(loginSignupPage.inputPassword).type('starinanovak2025');
        cy.get(loginSignupPage.buttonLogin).click();
        cy.contains('Your email or password is incorrect!').should('be.visible');
    });
});