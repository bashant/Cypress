export class SignUpPage{
    
    clickbutton(){
        cy.get(':nth-child(3) > .nav-link').click()
    }
    
    enterUsername(){
        cy.get(':nth-child(1) > .form-control').type('Bashant Roy')
    }

    enterEmail(){
        cy.get(':nth-child(2) > .form-control').type('basanta.roy2015@gmail.com')
    }
  
    enterPassword(){
        cy.get(':nth-child(3) > .form-control').type('Roy1996')
    }
    clickSignUp(){
        cy.get('.btn').click()
    }
  }