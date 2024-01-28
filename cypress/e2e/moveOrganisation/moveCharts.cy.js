describe("moveCharts", () => {
  it("tests moveCharts", () => {
    cy.viewport(998, 658);
    cy.visit("http://18.207.217.149/");
    cy.get('#userName').type('superadmin')
    cy.get('#password').type('superadmin')
    cy.get('#loginButton').click()
    cy.get("#leMenu > ul > li:nth-of-type(3) > a").click();
    cy.get("li:nth-of-type(5) li:nth-of-type(1) > a").click({force:true});
    cy.get("#maarchRM_ryw140-381j-f4d32e > div > i").click();
    cy.get("#maarchRM_ryw140-381j-f4d32e > i").click();
    cy.get("#maarchRM_rz4uxb-5g9l-cs8ju1 > i").click();
    cy.get("ul:nth-of-type(3) > li > ul > li:nth-of-type(1) div > i").click();
    cy.get("ul:nth-of-type(3) > li > ul > li:nth-of-type(1) li.moveOrganization > a").click();
    cy.get("ul:nth-of-type(3) li:nth-of-type(2) > input").click();
    cy.get("#organization_submitMove").click();
    cy.get("ul:nth-of-type(3) > li > input").click();
    cy.get("#organization_submitMove").click();
  });
});
