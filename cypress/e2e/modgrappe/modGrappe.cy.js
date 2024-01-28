describe("modGrappe", () => {
  it("tests modGrappe", () => {
    cy.viewport(998, 658);
    cy.visit("http://18.207.217.149/");
    cy.get('#userName').type('superadmin')
    cy.get('#password').type('superadmin')
    cy.get('#loginButton').click()
    cy.get("#leMenu > ul > li:nth-of-type(3) > a").click();
    cy.get("li:nth-of-type(7) li:nth-of-type(2) > a").click({force:true});
    cy.get("tr.even button").click();
    cy.get("#clusterName").click();
    cy.get("#clusterName").type("grappe4");
    cy.get("#update").click();
  });
});
