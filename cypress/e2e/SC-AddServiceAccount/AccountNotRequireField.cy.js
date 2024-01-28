describe("AccountNotRequireField", () => {
  it("tests AccountNotRequireField", () => {
    cy.viewport(971, 658);
    cy.visit("http://18.207.217.149/");
    cy.get('#userName').type('superadmin')
    cy.get('#password').type('superadmin')
    cy.get('#loginButton').click()
    cy.get("#leMenu > ul > li:nth-of-type(3) > a").click();
    cy.get("li.open > ul > li:nth-of-type(3) li:nth-of-type(2) > a").click({force: true});
    cy.get("#addServiceAccount").click();
    cy.get("#accountName").click();
    cy.get("#accountName").type("compte3");
    cy.get("#selectPrivilegeURI").click();
    cy.get("#selectPrivilegeURI").type("Tous les droits");
    cy.get("#listPrivilege span span").click();
    cy.get("#submitServiceAccount").click();
  });
});
