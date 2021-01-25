describe("logout", ()=> {
    it("Logout via Perfil", () => {
        cy.login('testecypress2@mock.com', 'testeecypress');
        cy.contains("Settings").click();
        cy.url().should("include", "/settings");
        cy.get('.btn-outline-danger').click()
    })
})