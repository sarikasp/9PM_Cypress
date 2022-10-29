/// <reference types="cypress" />

describe("Validate Login Functionality", () => {


    it("Login with Valid Credentials", function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type('Admin')
        cy.get('input[type="password"]').type('admin123')
        cy.get('button[type="submit"]').click()
        cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text', 'PIM')
    })


    it('Login eith Invalid Crendetials', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type('Admin1232')
        cy.get('input[type="password"]').type('1231admin123')
        cy.get('button[type="submit"]').click()
        cy.get('.oxd-alert-content-text').should('have.text', 'Invalid credentials')
    })


    it.only("Login with Valid Credentials", function () {
        cy.login('Admin', 'admin123')
        cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text', 'PIM')
    })

    it.only('Login eith Invalid Crendetials', ()=>{
        cy.login('Admin1232', '1231admin123')
        cy.get('.oxd-alert-content-text').should('have.text', 'Invalid credentials')
    })




})