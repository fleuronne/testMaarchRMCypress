describe("ModAccounService", () => {
  it("tests ModAccounService", () => {
    cy.viewport(998, 658);
    cy.visit("http://18.207.217.149/");
    cy.get('#userName').type('superadmin')
    cy.get('#password').type('superadmin')
    cy.get('#loginButton').click()
    cy.get("#leMenu > ul > li:nth-of-type(3) > a").click();
    cy.get("li.open > ul > li:nth-of-type(3) li:nth-of-type(2) > a").click({force: true});
    cy.get("#maarchRM_rz4tyz-fo1a-a79o5l button.btn-info").click();
    cy.get("#emailAddress").click();
    cy.get("#emailAddress").type("vinnyngaleu1@gmail.com");
    cy.get("#submitServiceAccount").click();
  });
});
