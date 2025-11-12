export class SignupLoginPageLocators {

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
}

export const loginSignupPageLocators = new SignupLoginPageLocators()