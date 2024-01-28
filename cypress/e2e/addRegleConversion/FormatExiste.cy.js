describe("FormatExiste", () => {
  it("tests FormatExiste", () => {
    cy.viewport(964, 658);
    cy.visit("http://18.207.217.149/");
    cy.get('#userName').type('superadmin')
    cy.get('#password').type('superadmin')
    cy.get('#loginButton').click()
    cy.get("#leMenu > ul > li:nth-of-type(3) > a").click();
    cy.get("li:nth-of-type(6) li:nth-of-type(2) > a").click({force:true});
    cy.get("#btnAddConversionRule").click();
    cy.get("#puid").click();
    cy.get("#puid").type("fmt/14");
    cy.get("#conversionService").click();
    cy.get("#conversionService").type("dependency/fileSystem/plugins/GhostScript");
    cy.get("#createConversionRule").click();
  });
});
