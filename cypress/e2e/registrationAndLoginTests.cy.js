const { homePage } = require("../page-objects/homePage")
const { loginSignupPage } = require("../page-objects/signupLoginPage")

beforeEach('Open application', () => {
    cy.openApplication(); 
    homePage.goToLoginPage();   
});

describe('Registration and Login tests', () => {
    it('Verify user registration process', () => {
        loginSignupPage.registerNewUser({
            username:'vlada79', 
            email: 'vlada79@gmail.com', 
            password: 'partizan', 
            day: '26',
            month: 'July',
            year: '1979',
            firstName: 'Vladimir', 
            lastName: 'Djordjevic', 
            address: 'Hawkins St. 41',
            country: 'United States', 
            state: 'Indiana', 
            city: 'Hawkins', 
            zipcode: '46001', 
            mobileNumber: '399621456'
        });
    });

    it('Verify you can not register user with existing email address', () => {
        cy.get(loginSignupPage.inputSignupName).type("vlada79");
        cy.get(loginSignupPage.inputSignupEmail).type("vlada79@gmail.com");
        cy.get(loginSignupPage.buttonSignup).click();
        cy.contains('Email Address already exist!').should('exist').should('be.visible');
    });

    it('Verify user logout', () => {
       loginSignupPage.loginAndLogout('vlada79@gmail.com', 'partizan');
       cy.contains('Login to your account').should('exist').should('be.visible');
    });

    it('Verify user can delete account after successful login', () => {
        loginSignupPage.loginToApplicationAndDeleteAccount('vlada79@gmail.com', 'partizan');
        cy.contains('Account Deleted!').should('exist').should('be.visible');
    });

    it('Verify that user can not login with incorrect email and password', () => {
        cy.get(loginSignupPage.inputLoginEmail).type('nina2014@gmail.com');
        cy.get(loginSignupPage.inputLoginPassword).type('starinanovak2025');
        cy.get(loginSignupPage.buttonLogin).click();
        cy.contains('Your email or password is incorrect!').should('exist').should('be.visible');
    });
});