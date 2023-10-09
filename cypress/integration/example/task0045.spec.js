/// <reference types="Cypress" />
describe('Test Suit', function()
{
     before(function()
   {
        cy.fixture('testdata').then(function(data)
        {
            this.data=data        
        })

    })

    it('login test',{scrollBehavior: false}, function()
      {

       cy.login(this.data.username, this.data.password)

       cy.get('h2:nth-child(1)').should('have.text', 'Welcome to DoltHub')

       cy.title().should('be.equal','My Databases | DoltHub')

       cy.logout()

     })

     
   
})