const { createYield } = require("typescript")

describe("Primeiro Teste", () => {
    it("Exemplo Cypress", () => {
        cy.visit('https://example.cypress.io')
        expect(true).to.equal(true)
    })
})