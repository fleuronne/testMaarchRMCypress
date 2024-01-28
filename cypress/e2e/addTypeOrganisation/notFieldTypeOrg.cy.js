describe("notFieldTypeOrg", () => {
  it("tests notFieldTypeOrg", () => {
    cy.viewport(998, 658);
    cy.visit("http://18.207.217.149/");
    cy.get("#userName").click();
    cy.get("#userName").type("superadmin");
    cy.get("#password").type("superadmin");
    cy.get("#loginButton").click();
    cy.get("#leMenu > ul > li:nth-of-type(3) > a").click();
    cy.get("li:nth-of-type(5) li:nth-of-type(2) > a").click({force:true});
    cy.get("#orgType_addNewOrgType").click();
    cy.get("form > div:nth-of-type(1) input").click();
    cy.get("form > div:nth-of-type(1) input").type("com");
    cy.get("#orgType_saveOrgType").click();
  });
});
