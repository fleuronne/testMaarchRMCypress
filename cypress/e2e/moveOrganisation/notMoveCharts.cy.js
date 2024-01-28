describe("notMoveCharts", () => {
  it("tests notMoveCharts", () => {
    cy.viewport(998, 658);
    cy.visit("http://18.207.217.149/");
    cy.get('#userName').type('superadmin')
    cy.get('#password').type('superadmin')
    cy.get('#loginButton').click()
    cy.get("#leMenu > ul > li:nth-of-type(3) > a").click();
    cy.get("li:nth-of-type(5) li:nth-of-type(1) > a").click({force:true});
    cy.get("ul:nth-of-type(2) div > i").click();
    cy.get("#organization_submitMove").click();
  });
});
