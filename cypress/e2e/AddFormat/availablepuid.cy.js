describe("availablepuid", () => {
  it("tests availablepuid", () => {
    cy.viewport(998, 658);
    cy.visit("http://18.207.217.149/");
    cy.get('#userName').type('superadmin')
    cy.get('#password').type('superadmin')
    cy.get('#loginButton').click()
    cy.get("#leMenu > ul > li:nth-of-type(3) > a").click();
    cy.get("li:nth-of-type(6) li:nth-of-type(1) > a").click({force:true});
    cy.get("#puidTypeahead").click();
    cy.get("#puidTypeahead").type("fml");
    cy.get("#fieldName input").click();
    cy.get("#fieldName input").type("document");
    cy.get("#fieldVersion input").click();
    cy.get("#fieldVersion input").type("1.0");
    cy.get("#inputAddMimetype").click();
    cy.get("#format_formSaveBtn").click();
  });
});
