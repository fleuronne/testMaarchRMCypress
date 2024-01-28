describe("RequireCom", () => {
  it("tests RequireCom", () => {
    cy.viewport(964, 658);
    cy.visit("http://18.207.217.149/");
    cy.get('#userName').type('superadmin')
    cy.get('#password').type('superadmin')
    cy.get('#loginButton').click()
    cy.get("#leMenu > ul > li:nth-of-type(3) > a").click();
    cy.get("li:nth-of-type(8) li:nth-of-type(2) > a").click({force:true});
    cy.get("#addNewAccessCode").click();
    cy.get("#accesRuleDuration").type("1");
    cy.get("#accesRuleDuration").click();
    cy.get("#save i").click();
  });
});
