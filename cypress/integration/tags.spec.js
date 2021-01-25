describe("Tags", () => {
    it("Adicionar", () => {
        cy.login('testecypress2@mock.com', 'testeecypress');
        cy.contains('testcy').click();
        cy.location("pathname").should("contains", "/profile");
        cy.get(".article-preview").get("h1").first().click();
        cy.contains("Edit Article").click();
        cy.get('[placeholder="Enter tags"]').type("dugeons{enter}")
        cy.get('[placeholder="Enter tags"]').type("dragons{enter}")
        cy.contains("Publish Article").click();
        cy.get(".tag-list").contains("dragons");
    })
})