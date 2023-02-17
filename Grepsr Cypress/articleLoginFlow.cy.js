/// <reference types ="cypress" />

import { LoginTestPage } from "./Pages/logintest_pages"

const logintestPage = new LoginTestPage()

describe('Login Test', function(){
    beforeEach(function(){
     cy.visit('https://next-realworld.vercel.app/')
    })
        it('Login Test Successful', function(){
        logintestPage.clickbutton()  
        logintestPage.enterUsername()
        logintestPage.enterPassword()
        logintestPage.clickLogin()
        })
        
        it('Login Test Failed', function(){
        logintestPage.clickbutton()  
        logintestPage.enterUsername()
        logintestPage.clickLogin()
        })


    })
    
    