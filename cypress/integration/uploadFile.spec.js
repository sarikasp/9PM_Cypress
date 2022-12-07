describe("Cypress File Upload", () => {

    let uptFile = "Ruban_Resume.pdf"
    let uptFile2 = "sanchu_ExamForm.pdf"
    let uptFile3 = "Robin.pdf"
    let uptFile4 = "PYTHON.pdf"

    it("1st example Upload:", function () {
        cy.visit('https://www.automationexercise.com/login')
        cy.get('[placeholder="Email Address"]').first().type('gauri@gmail.com')
        cy.get('[name="password"]').type('Gauri99')
        cy.get('[data-qa="login-button"]').click()
        cy.get('[href="/contact_us"]').click()
        cy.get('[name="name"]').type('Gauri')
        cy.get('[name="email"]').type('gauri@test.com')
        cy.get('[name="subject"]').type('File Upload')
        cy.get('#message').type('File upload 1st example')
        cy.get('[name="upload_file"]').attachFile(uptFile)
        cy.get('[name="submit"]').click()
        cy.contains('Success! Your details have been submitted successfully.').should('be.visible')
    })


    it.only("1st example Upload:", function () {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload')
            .attachFile(uptFile)
            .attachFile(uptFile2)
            .attachFile(uptFile3)
            .attachFile(uptFile4)
        cy.get('a[target="_top"]').last().should('have.text', 'Multiple File Upload Input')
    })

})