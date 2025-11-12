class SignupLoginPage {

    get inputSignupName() { return '[data-qa="signup-name"]'; }
    get inputSignupEmail() { return '[data-qa="signup-email"]'; }
    get buttonSignup() { return '[data-qa="signup-button"]'; }
    get inputLoginEmail() { return '[data-qa="login-email"]'; }
    get inputLoginPassword() { return '[data-qa="login-password"]'; }
    get buttonLogin() { return '[data-qa="login-button"]'; }
    get inputRegistrationPassword() {return '[data-qa="password"]';}
    get inputDays() {return '[data-qa="days"]';}
    get inputMonths() {return '[data-qa="months"]';}
    get inputYears() {return '[data-qa="years"]';}
    get inputFirstName() {return '[data-qa="first_name"]';}
    get inputLastName() {return '[data-qa="last_name"]';}
    get inputAddress() {return '[data-qa="address"]';}
    get dropdownCountry() {return '[data-qa="country"]';}
    get inputState() {return '[data-qa="state"]';}
    get inputCity() {return '[data-qa="city"]';}
    get inputZipcode() {return '[data-qa="zipcode"]';}
    get inputMobilePhone() {return '[data-qa="mobile_number"]';}
    get buttonCreateAccount() {return '[data-qa="create-account"]';}


    registerNewUser({ username, email, password, day, month, year, firstName, lastName, address, country, state, city, zipcode, mobileNumber }) {
        cy.get(this.inputSignupName).type(username);
        cy.get(this.inputSignupEmail).type(email);
        cy.get(this.buttonSignup).click();
        cy.contains('Enter Account Information').should('exist').should('be.visible');

        cy.get(this.inputRegistrationPassword).type(password);
        cy.get(this.inputDays).select(day);
        cy.get(this.inputMonths).select(month);
        cy.get(this.inputYears).select(year);

        cy.get(this.inputFirstName).type(firstName);
        cy.get(this.inputLastName).type(lastName);
        cy.get(this.inputAddress).type(address);

        cy.get(this.dropdownCountry).select(country);
        cy.get(this.inputState).type(state);
        cy.get(this.inputCity).type(city);
        cy.get(this.inputZipcode).type(zipcode);
        cy.get(this.inputMobilePhone).type(mobileNumber);
        
        cy.get(this.buttonCreateAccount).click();
        cy.contains('Account Created!').should('exist').should('be.visible');     
    };

    login(email, password) {
        cy.get(this.inputLoginEmail).type(email);
        cy.get(this.inputLoginPassword).type(password);
        cy.get(this.buttonLogin).click();
        cy.contains(`Logged in as ${email.split("@")[0]}`).should('be.visible');
        }

     loginAndLogout(email, password) {
        this.login(email, password);
        cy.contains('Logout').click();
    };

    loginToApplicationAndDeleteAccount(email, password) {
        this.login(email, password);
        cy.contains('Delete Account').click();
    };
   
};








export const loginSignupPage = new SignupLoginPage()