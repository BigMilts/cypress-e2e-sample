const { createYield } = require("typescript")

describe("Post", () => {
    beforeEach(() => {
        cy.login('testecypress2@mock.com', 'testeecypress');
    })
    it("Novo", () => {
        const title = "Cypress 234"
        cy.contains("New Article").click();
        cy.location("pathname").should('equal', '/editor');
        cy.get('[formcontrolname=title]').type(title);
        cy.get('[formcontrolname=description]').type("Ponta a Ponta");
        cy.get('[formcontrolname=body]').type("Agilidade, Qualidade");
        cy.contains("Publish Article").click();
        cy.get("h1").contains(title)
    })
    it("Editar", () => {
        cy.contains('testcy').click();
        cy.location("pathname").should("contains", "/profile");
        cy.get(".article-preview").get("h1").first().click();
        cy.contains("Edit Article").click();
        cy.get("[formcontrolname=body]").clear();
        cy.get("[formcontrolname=body]").type("Economia");
        cy.contains("Publish Article").click();
        cy.contains("Economia");
    })
})