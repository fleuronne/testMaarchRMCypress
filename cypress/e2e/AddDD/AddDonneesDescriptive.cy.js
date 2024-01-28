describe("AddDonneesDescriptive", () => {
  it("tests AddDonneesDescriptive", () => {
    cy.viewport(964, 658);
    cy.visit("http://18.207.217.149/");
    cy.get('#userName').type('superadmin')
    cy.get('#password').type('superadmin')
    cy.get('#loginButton').click()
    cy.get("#leMenu > ul > li:nth-of-type(3) > a").click();
    cy.get("li:nth-of-type(8) li:nth-of-type(5) > a").click({force:true});
    cy.get("#fieldName input").click();
    cy.get("#fieldName input").type("fichiers");
    cy.get("#propertyLabel input").click();
    cy.get("#propertyLabel input").type("fichier");
    cy.get("#descriptionField_formSaveBtn").click();
    cy.get("form > div:nth-of-type(1) > div label:nth-of-type(1)").click();
    cy.get("#descriptionField_formSaveBtn").click();
  });
});
