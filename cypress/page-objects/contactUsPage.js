import { ContactUsPageLocators } from './locators/contactUsPageLocators';

class ContactUsPage extends ContactUsPageLocators {
    
    populateContactUsForm({name, email, subject, message}) {
        cy.get(this.inputName).type(name);
        cy.get(this.inputEmail).type(email);
        cy.get(this.inputSubject).type(subject);
        cy.get(this.messageBox).type(message)
    }

    uploadFile(filePath) {
        cy.get(this.inputFile).attachFile(filePath);
        cy.get(this.buttonSubmit).click()
    }
}



export const contactUsPage = new ContactUsPage()