const { createYield } = require("typescript")

describe('Profile', () => {
    it("Editar Perfil", () => {
        cy.login('testecypress2@mock.com', 'testeecypress')
        cy.contains('testecy').click()
        cy.contains("Edit Profile Settings").click()
        cy.get('[formcontrolname="image"]').clear()
        cy.get('[formcontrolname="image"]')
            .type("https://thispersondoesnotexist.com/image")
        cy.get('[formcontrolname="password"]').type('testecy')
        cy.contains("Update Settings").click()
    })
})