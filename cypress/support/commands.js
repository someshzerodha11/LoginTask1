// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login',(username, password) =>
{
 
    cy.visit('/')

    cy.get('div.FormComponents_inputContainer__l7W2k > div.FormInput_container__bYDqB > input.FormInput_input__fMPWe').type(username)

    cy.get('div.PasswordInput_passInput__VW0S_ > div:nth-child(1) > div.FormInput_container__bYDqB > input.FormInput_input__fMPWe').type(password)

    cy.get('[data-cy="signin-with-email-button"]').click()
    
})

Cypress.Commands.add('logout', (sign, out) =>
{
    cy.get('[data-cy="mobile-navbar-menu-button"]').click()

         cy.get('[data-cy="sign-out-button-mobile"]').click()

})