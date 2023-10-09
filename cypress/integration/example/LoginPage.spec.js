/// <reference types='cypress' />

import LoginPage from "./PageObjects/POMLoginPage"

describe('Test suit', function()
{
    before(function()
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
          



       })


})