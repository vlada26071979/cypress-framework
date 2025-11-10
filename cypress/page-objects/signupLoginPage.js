class SignupLoginPage {

    inputSignupName = '[data-qa="signup-name"]';
    inputSignupЕmail = '[data-qa="signup-email"]';
    buttonSignup = '[data-qa="signup-button"]'

    registerNewUser(username, email, password, firstName, lastName, address, country, state,city, zipcode, mobileNumber) {
        cy.get('[data-qa="signup-name"]').type(username);
        cy.get('[data-qa="signup-email"]').type(email);
        cy.get('[data-qa="signup-button"]').click();
        cy.contains('Enter Account Information').should('be.visible');

        cy.get('[data-qa="password"]').type(password);

        cy.get('[data-qa="days"]').select('26');
        cy.get('[data-qa="months"]').select('July');
        cy.get('[data-qa="years"]').select('1979');

        cy.get('[data-qa="first_name"]').type(firstName);
        cy.get('[data-qa="last_name"]').type(lastName);
        cy.get('[data-qa="address"]').type(address);

        cy.get('[data-qa="country"]').select(country);
        cy.get('[data-qa="state"]').type(state);
        cy.get('[data-qa="city"]').type(city);
        cy.get('[data-qa="zipcode"]').type(zipcode);
        cy.get('[data-qa="mobile_number"]').type(mobileNumber);
        
        cy.get('[data-qa="create-account"]').click();
        cy.contains('Account Created!').should('be.visible');
        

    }
}








export const loginSignupPage = new SignupLoginPage()