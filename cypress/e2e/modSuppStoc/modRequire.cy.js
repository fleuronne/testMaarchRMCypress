describe("modRequire", () => {
  it("tests modRequire", () => {
    cy.viewport(998, 658);
    cy.visit("http://18.207.217.149/");
    cy.get('#userName').type('superadmin')
    cy.get('#password').type('superadmin')
    cy.get('#loginButton').click()
    cy.get("#leMenu span").click();
    cy.get("li:nth-of-type(7) li:nth-of-type(1) > a").click({force:true});
    cy.get("tr.odd span").click();
    cy.get("#repositoryForm > div:nth-of-type(1) input").click();
    cy.get("#repositoryForm > div:nth-of-type(1) input").type("");
    cy.get("#validateForm").click();
  });
});
