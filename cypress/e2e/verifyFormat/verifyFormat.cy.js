describe("verifyFormat", () => {
  it("tests verifyFormat", () => {
    cy.viewport(998, 658);
    cy.visit("http://18.207.217.149/");
    cy.get('#userName').type('superadmin')
    cy.get('#password').type('superadmin')
    cy.get('#loginButton').click()
    cy.get("#leMenu > ul > li:nth-of-type(3) > a").click();
    cy.get("li:nth-of-type(6) li:nth-of-type(1) > a").click({force:true});
    cy.get("div:nth-of-type(2) > div > div:nth-of-type(2) h4:nth-of-type(1)").click();
    cy.get("#inputFormatFile").type("C:\\fakepath\\Etude de marché.docx");
    cy.get("#fileCheckFormat_submit").click();
  });
});
