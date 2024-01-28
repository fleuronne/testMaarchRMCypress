describe("AddConserv", () => {
  it("tests AddConserv", () => {
    cy.viewport(964, 658);
    cy.visit("http://18.207.217.149/");
    cy.get('#userName').type('superadmin')
    cy.get('#password').type('superadmin')
    cy.get('#loginButton').click()
    cy.get("#leMenu > ul > li:nth-of-type(3) > a").click();
    cy.get("li:nth-of-type(8) li:nth-of-type(3) > a").click({force:true});
    cy.get("#new-retentionRule").click();
    cy.get("#code").click();
    cy.get("#code").type("C01");
    cy.get("#label").click();
    cy.get("#label").type("archives");
    cy.get("#duration").type("1");
    cy.get("#duration").click();
    cy.get("#duration").type("2");
    cy.get("#duration").click();
    cy.get("#finalDisposition").click();
    cy.get("#finalDisposition").type("preservation");
    cy.get("#add").click();
  });
});
