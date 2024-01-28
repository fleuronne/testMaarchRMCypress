describe("addChildService", () => {
  it("tests addChildService", () => {
    cy.viewport(998, 658);
    cy.visit("http://18.207.217.149/");
    cy.get('#userName').type('superadmin')
    cy.get('#password').type('superadmin')
    cy.get('#loginButton').click()
    cy.get("li:nth-of-type(5) li:nth-of-type(1) > a").click();
    cy.get("#maarchRM_ryw140-381j-f4d32e > div > i").click({force:true});
    cy.get("#maarchRM_ryw140-381j-f4d32e li.addChildOrgUnit > a").click();
    cy.get("#organization_organizationForm form > div:nth-of-type(1) input").click();
    cy.get("#organization_organizationForm form > div:nth-of-type(1) input").type("telec");
    cy.get("#organization_organizationForm div:nth-of-type(3) > input").click();
    cy.get("#organization_organizationForm div:nth-of-type(3) > input").type("telec");
    cy.get("#organization_submit").click();
  });
});
