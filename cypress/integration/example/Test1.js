/// <reference types="Cypress" />
describe('My First Test Suit', function()
{
    it('My First test', function()
        {

         cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")

         cy.get('.search-keyword').type('ca')

         cy.wait(2000)
         cy.get('product:visibl').should('have.length', '5')


            



    })

})