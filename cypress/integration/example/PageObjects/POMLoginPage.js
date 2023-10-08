                   /// <reference types='cypress' />
                   
class LoginPage
{

visitLoginPage()
{
    cy.visit('https://www.dolthub.com/signin')
}


insertUsername(value)
{
const field= cy.get('div.FormComponents_inputContainer__l7W2k > div.FormInput_container__bYDqB > input.FormInput_input__fMPWe')
field.type(value)
return this
}


insertPassword(value)
{
const field= cy.get('div.PasswordInput_passInput__VW0S_ > div:nth-child(1) > div.FormInput_container__bYDqB > input.FormInput_input__fMPWe')
field.type(value)
}


Submit()
{
    const button= cy.get('[data-cy="signin-with-email-button"]')
    button.click()

}

}

    export default LoginPage