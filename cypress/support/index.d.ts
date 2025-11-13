/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Command to open home page of application
     */
    openApplication(): Chainable<void>
    login(): Chainable<void>
  }
}
