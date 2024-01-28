describe("WeakNameLength", () => {
  it("tests WeakNameLength", () => {
    cy.viewport(952, 658);
    cy.visit("http://18.207.217.149/");
    cy.get("#userName").click();
    cy.get("#userName").type("superadmin");
    cy.get("#password").type("superadmin");
    cy.get("#loginButton").click();
    cy.get("#leMenu > ul > li:nth-of-type(3) > a").click();
    cy.get("li.open > ul > li:nth-of-type(3) > ul > li:nth-of-type(3) > a").click({force: true});
    cy.get("#createRole").click();
    cy.get("#roleInformation > div:nth-of-type(1) > input").click();
    cy.get("#roleInformation > div:nth-of-type(1) > input").type("c");
    cy.get("#submit").click();
  });
});
