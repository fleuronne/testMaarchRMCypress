describe("AccountServiceAdd", () => {
  it("tests AccountServiceAdd", () => {
    cy.viewport(969, 658);
    cy.visit("http://18.207.217.149/");
    cy.get('#userName').type('superadmin')
    cy.get('#password').type('superadmin')
    cy.get('#loginButton').click()
    cy.get("#leMenu > ul > li:nth-of-type(3) > a").click();
    cy.get("li.open > ul > li:nth-of-type(3) li:nth-of-type(2) > a").click({force: true});
    cy.get("#listServiceAccounts i").click();
    cy.get("#accountName").click();
    cy.get("#accountName").type("compte5");
    cy.get("#emailAddress").click();
    cy.get("#emailAddress").type("vinnyngaleu1@gmail.com");
    cy.get("#orgTypeahead").click();
    cy.get("#orgTypeahead").type("dev");
    cy.get("span > div > span").click();
    cy.get("#selectPrivilegeURI").click();
    cy.get("#selectPrivilegeURI").type("Tous les droits");
    cy.get("#btnAddPrivilege").click();
    cy.get("#submitServiceAccount").click();
  });
});
