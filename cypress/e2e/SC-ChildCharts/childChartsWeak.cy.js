describe("childChartsWeak", () => {
  it("tests childChartsWeak", () => {
    cy.viewport(998, 658);
    cy.visit("http://18.207.217.149/");
    cy.get('#userName').type('superadmin')
    cy.get('#password').type('superadmin')
    cy.get('#loginButton').click()
   
    cy.get("#leMenu > ul > li:nth-of-type(3) > a").click();
    cy.get("li:nth-of-type(5) li:nth-of-type(1) > a").click({force: true});
    cy.get("#maarchRM_rz4uxb-5g9l-cs8ju1 > div > i").click();
    cy.get("#maarchRM_rz4uxb-5g9l-cs8ju1 li.addChildOrganization > a").click();
    cy.get("#organization_organizationForm form > div:nth-of-type(1) input").click();
    cy.get("#organization_organizationForm form > div:nth-of-type(1) input").type("n");
    cy.get("#organization_organizationForm div:nth-of-type(3) > input").click();
    cy.get("#organization_organizationForm div:nth-of-type(3) > input").type("n");
    cy.get("#organization_submit").click();
  });
});
