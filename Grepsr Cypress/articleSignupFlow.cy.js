/// <reference types ="cypress" />

import { SignUpPage } from "./Pages/signup_pages"

const signupPage = new SignUpPage()

describe('SignUp Test', function(){
beforeEach(function(){
    cy.visit('https://next-realworld.vercel.app/')
})
    it('SignUp Test Successful', function(){
       signupPage.clickbutton()
       signupPage.enterUsername()
       signupPage.enterEmail()
       signupPage.enterPassword()
       signupPage.clickSignUp()
    })
    it('SignUp Test Failed', function(){
        signupPage.clickbutton()
        signupPage.enterUsername()
        signupPage.enterPassword()
        signupPage.clickSignUp()
       
    })
})

