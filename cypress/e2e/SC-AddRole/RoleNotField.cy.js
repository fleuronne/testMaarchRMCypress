describe("RoleNotField", () => {
  it("tests RoleNotField", () => {
    cy.viewport(969, 658);
    cy.visit("http://18.207.217.149/");
    cy.get("#userName").click();
    cy.get("#userName").type("superadmin");
    cy.get("#password").type("superadmin");
    cy.get("#loginButton").click();
    cy.get("#leMenu > ul > li:nth-of-type(3) > a").click();
    cy.get("li.open > ul > li:nth-of-type(3) > ul > li:nth-of-type(3) > a").click({force: true});
    cy.get("#createRole").click();
    cy.get("#contain > div:nth-of-type(2) > div > div:nth-of-type(1) label.active").click();
    cy.get("#privilegesTabBtn > a").click();
    cy.get("div:nth-of-type(2) > div > div:nth-of-type(2) div.form-group label.btn-default").click();
    cy.get("#submit").click();
  });
});
