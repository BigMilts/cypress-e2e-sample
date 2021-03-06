const { createYield } = require("typescript")

describe("Condut Login", () => {
    it("Login Sucesso", () => {
        cy.login('testecypress2@mock.com', 'testeecypress')
        cy.get('.nav-item:nth-child(4) > .nav-link').click()
        cy.get('.btn:nth-child(5)').click()
        cy.url().should('contain', '/settings')
    })
    it("Dados inválidos", () => {
        cy.login('usuario@inexistente.com', 'senhaerrada')
        cy.get('.error-messages > li')
        .should('contain', 'email or password is invalid')
    })
})