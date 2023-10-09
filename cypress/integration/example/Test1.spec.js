/// <reference types="Cypress" />
describe('My First Test Suit', function()
{
    it('My First test', function()
        {

         cy.visit("https://amazon.com/")



         cy.title().should('be.equal','Amazon.com. Spend less. Smile more.')


            



    })

})
