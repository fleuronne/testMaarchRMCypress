describe("RequireGrappe", () => {
  it("tests RequireGrappe", () => {
    cy.viewport(998, 658);
    cy.visit("http://18.207.217.149/");
    cy.get('#userName').type('superadmin')
    cy.get('#password').type('superadmin')
    cy.get('#loginButton').click()
    cy.get("#leMenu > ul > li:nth-of-type(3) > a").click();
    cy.get("li:nth-of-type(7) li:nth-of-type(2) > a").click({force:true});
    cy.get("#btnAddCluster").click();
    cy.get("#clusterName").click();
    cy.get("#clusterName").type("grappe2");
    cy.get("#submit").click();
  });
});
