describe("logout", () => {
  it("tests logout", () => {
    cy.viewport(964, 658);
    cy.visit("http://18.207.217.149//user/prompt");
    cy.get("#userName").click();
    cy.get("#userName").type("superadmin");
    cy.get("#password").type("superadmin");
    cy.get("#loginButton").click();
    cy.location("href").should("eq", "http://18.207.217.149/");
    cy.get("#leMenu div").click();
    cy.get("#dropdown li:nth-of-type(3) > a").click();
    cy.location("href").should("eq", "http://18.207.217.149/user/prompt");
  });
});
