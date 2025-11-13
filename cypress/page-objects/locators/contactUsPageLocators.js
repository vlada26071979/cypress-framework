export class ContactUsPageLocators {

    get inputName() { return '[data-qa="name"]'; }
    get inputEmail() { return '[data-qa="email"]'; }
    get inputSubject() { return '[data-qa="subject"]'; }
    get messageBox() { return '[data-qa="message"]'; }
    get inputFile() {return 'input[type="file"]'};
    get buttonSubmit() {return '[data-qa="submit-button"]'};
    get buttonHome() {return 'a.btn-success'};
}