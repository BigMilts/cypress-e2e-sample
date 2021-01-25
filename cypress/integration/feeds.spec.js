const { createYield } = require("typescript")

describe('Conduit Feed', () => {
    it("Ver Feeds", () => {
        cy.login('testecypress2@mock.com', 'testeecypress');
        cy.get(".nav-pills > .nav-item:nth-child(1) > .nav-link").click();
        cy.get(".nav-pills > .nav-item:nth-child(2) > .nav-link").click();
        cy.get('app-article-preview:nth-child(1) .btn').click();
    })
})