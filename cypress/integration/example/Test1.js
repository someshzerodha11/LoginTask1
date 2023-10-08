/// <reference types="Cypress" />
describe('My First Test Suit', function()
{
    it('My First test', function()
        {

<<<<<<< Updated upstream
         cy.visit("https://amazon.com/")
=======


         cy.get('.search-keyword').type('ca')

         cy.wait(2000)
         cy.get('product:visibl').should('have.length', '5')


            



    })

})
