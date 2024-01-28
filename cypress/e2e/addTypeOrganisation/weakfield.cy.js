describe("weakfield", () => {
  it("tests weakfield", () => {
    cy.viewport(998, 658);
    cy.visit("http://18.207.217.149/");
    cy.get('#userName').type('superadmin')
    cy.get('#password').type('superadmin')
    cy.get('#loginButton').click()

    cy.get("#leMenu span").click();
    cy.get("li:nth-of-type(5) li:nth-of-type(1) > a").click({force:true});
    cy.get("#leMenu > ul > li:nth-of-type(3) > a").click();
    cy.get("li:nth-of-type(5) li:nth-of-type(2) > a").click();
    cy.get("#orgType_addNewOrgType").click();
    cy.get("form > div:nth-of-type(1) input").click();
    cy.get("form > div:nth-of-type(1) input").type("r");
    cy.get("form > div:nth-of-type(2) input").click();
    cy.get("form > div:nth-of-type(2) input").type("re");
    cy.get("#orgType_saveOrgType").click();
  });
});
