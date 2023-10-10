/// <reference types='cypress' />

import LoginPage from "./PageObjects/POMLoginPage"

describe('Test suit', function()
{
    this.beforeEach(function()
    {
         cy.fixture('testdata').then(function(data)
         {
             this.data=data        
         })
 
     })
 
     it('valid login test',{scrollBehavior: false}, function()
       {
          const lp=new LoginPage()

          lp.visitLoginPage()
          lp.insertUsername(this.data.username)
          lp.insertPassword(this.data.password)
          lp.Submit()
          

          cy.title().should('be.equal','My Databases | DoltHub')
          
          cy.logout()

       })

       it('should display error message with invalid username',{scrollBehavior: false}, function()
         {
           const lp=new LoginPage()

           lp.visitLoginPage()
           lp.insertUsername(this.data.invalidUsername)
           lp.insertPassword(this.data.password)
           lp.Submit()

           cy.get('[data-cy="error-msg"] > div').should('have.text', 'Login failed, please check credentials.')

  
        
        } )

        it('should display error message with invalid password',{scrollBehavior: false}, function()
        {
           const lp=new LoginPage()

           lp.visitLoginPage()
           lp.insertUsername(this.data.username)
           lp.insertPassword(this.data.invalidPassword)
           lp.Submit()

           cy.get('[data-cy="error-msg"] > div').should('have.text', 'Login failed, please check credentials.')


       
         
        } )






})