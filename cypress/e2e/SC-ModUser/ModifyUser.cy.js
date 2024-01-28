describe("ModifyUser", () => {
  it("tests ModifyUser", () => {
    cy.viewport(952, 658);
    cy.visit('http://18.207.217.149/')
    cy.get('#userName').type('superadmin')
    cy.get('#password').type('superadmin')
    cy.get('#loginButton').click()
   
    cy.get("#leMenu > ul > li:nth-of-type(3) > a").click();
    cy.get("li.open > ul > li:nth-of-type(3) li:nth-of-type(1) > a").click({force: true});
    cy.get("#maarchRM_rz4mpg-1po0-ba60jp button > span").click();
    cy.get("#accountName").click();
    cy.get("#accountName").type("506");
    cy.get("#user_saveUser").click();
  });
});
