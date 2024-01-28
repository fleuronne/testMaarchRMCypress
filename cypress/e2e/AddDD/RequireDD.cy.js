describe("RequireDD", () => {
  it("tests RequireDD", () => {
    cy.viewport(964, 658);
    cy.visit("http://18.207.217.149/");
    cy.get('#userName').type('superadmin')
    cy.get('#password').type('superadmin')
    cy.get('#loginButton').click()
    cy.get("#leMenu > ul > li:nth-of-type(3) > a").click();
    cy.get("li:nth-of-type(8) li:nth-of-type(5) > a").click({force:true});
    cy.get("#fieldName input").click();
    cy.get("#fieldName input").type("file");
    cy.get("#propertyLabel input").click();
    cy.get("#propertyLabel input").type("file");
    cy.get("#descriptionField_formSaveBtn").click();
  });
});
