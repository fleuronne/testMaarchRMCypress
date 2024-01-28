describe("requirePlanMen", () => {
  it("tests requirePlanMen", () => {
    cy.viewport(998, 658);
    cy.visit("http://18.207.217.149/");
    cy.get('#userName').type('superadmin')
    cy.get('#password').type('superadmin')
    cy.get('#loginButton').click()
    cy.get("#leMenu > ul > li:nth-of-type(3) > a").click();
    cy.get("li.open > ul > li:nth-of-type(4) > a").click({force:true});
    cy.get("#scheduleNewTask").click();
    cy.get("#name").click();
    cy.get("#name").type("men");
    cy.get("#taskId").click();
    cy.get("#taskId").type("01");
    cy.get("#serviceAccountId").click();
    cy.get("#serviceAccountId").type("maarchRM_rz4tyz-fo1a-a79o5l");
    cy.get("div:nth-of-type(4) label:nth-of-type(3)").click();
    cy.get("label:nth-of-type(9)").click();
    cy.get("tr:nth-of-type(1) > td:nth-of-type(4)").click();
    cy.get("#addTask").click();
  });
});
