describe("searchNotField", () => {
  it("tests searchNotField", () => {
    cy.viewport(964, 658);
    cy.visit("http://18.207.217.149/");
    cy.get("#userName").click();
    cy.get("#userName").type("superadmin");
    cy.get("#password").type("superadmin");
    cy.get("#loginButton").click();
    cy.get("#leMenu > ul > li:nth-of-type(3) > a").click();
    cy.get("li.open li:nth-of-type(2) li:nth-of-type(1) > a").click({force:true});
    cy.get("#search").click();
  });
});
