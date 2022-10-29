/// <reference types="cypress" />

describe("Traverse Methods", () => {

    it('Validate the Current Page URL', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('include', 'orangehrmlive')
    })

    it('Validate the Current Page Title', ()=>{
        cy.title().should('include', 'OrangeHRM')
     })

    it('Validate the Current Page URL', ()=>{
        cy.visit('http://automationpractice.com/index.php')
        cy.get('#contact-link').click()
        cy.url().should('include', 'controller=contact')
        cy.url().should('contain', 'controller=contact')
    })

    it('Validate the Current Page Title', ()=>{
       cy.title().should('include', 'Contact us - My Store')
    })


    it.only('To get children of DOM element, use the .children()', ()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-breadcrumb').children().should('have.length', 3)
    })


    it.only('To get first of DOM element within elements, use the .first()', ()=>{
        cy.get('.traversal-breadcrumb').children().first().should('have.text', 'Home')
        cy.get('.traversal-breadcrumb').children().first().should('contain', 'Home')
    })

    it.only('To get last of DOM element within elements, use the .last()', ()=>{
        cy.get('.traversal-breadcrumb').children().last().should('have.text', 'Contact Us')
        cy.get('.traversal-breadcrumb').children().last().should('contain', 'Contact Us')
    })


    it.only('To get DOM element at a specific index, use the .eq()', ()=>{
        cy.get('.traversal-breadcrumb').children().eq(1).should('have.text', 'About Us')
        cy.get('.traversal-breadcrumb').children().eq(1).should('contain', 'About Us')

        cy.get('.traversal-breadcrumb').children().eq(0).should('have.text', 'Home')
        cy.get('.traversal-breadcrumb').children().eq(0).should('contain', 'Home')

        cy.get('.traversal-breadcrumb').children().eq(2).should('have.text', 'Contact Us')
        cy.get('.traversal-breadcrumb').children().eq(2).should('contain', 'Contact Us')

    })
})


