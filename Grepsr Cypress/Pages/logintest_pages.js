export class LoginTestPage{
    
    clickbutton(){
        cy.get(':nth-child(2) > .nav-link').click()
    }
    
    enterUsername(){
        cy.get(':nth-child(1) > .form-control').type('basanta.roy2015@gmail.com')
    }
  
    enterPassword(){
        cy.get(':nth-child(2) > .form-control').type('Roy1996')
    }
    clickLogin(){
        cy.get('.btn').click()
    }
}