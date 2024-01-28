describe("ChildRequireService", () => {
  it("tests ChildRequireService", () => {
    cy.viewport(998, 658);
    cy.visit("http://18.207.217.149/");
    cy.get('#userName').type('superadmin')
    cy.get('#password').type('superadmin')
    cy.get('#loginButton').click()
    cy.get("#leMenu > ul > li:nth-of-type(3) > a").click();
    cy.get("li:nth-of-type(5) li:nth-of-type(1) > a").click({force:true});
    cy.get("#maarchRM_ryw140-381j-f4d32e > div > i").click();
    cy.get("#maarchRM_ryw140-381j-f4d32e li.addChildOrgUnit > a").click();
    cy.get("#organization_organizationForm form > div:nth-of-type(1) input").click();
    cy.get("#organization_organizationForm form > div:nth-of-type(1) input").type("comm");
    cy.get("#organization_submit").click();
  });
});
