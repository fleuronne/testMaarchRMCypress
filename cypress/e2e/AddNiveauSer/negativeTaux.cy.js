describe("negativeTaux", () => {
  it("tests negativeTaux", () => {
    cy.viewport(964, 658);
    cy.visit("http://18.207.217.149/");
    cy.get('#userName').type('superadmin')
    cy.get('#password').type('superadmin')
    cy.get('#loginButton').click()
    cy.get("#leMenu > ul > li:nth-of-type(3) > a").click();
    cy.get("li:nth-of-type(8) li:nth-of-type(4) > a").click({force:true});
    cy.get("#addNewServiceLevel").click();
    cy.get("#reference").click();
    cy.get("#reference").type("gpe2");
    cy.get("#samplingFrequency").type("1");
    cy.get("#samplingFrequency").click();
    cy.get("#samplingRate").click();
    cy.get("#samplingRate").type("-2");
    cy.get("#convertOnDeposit label.active").click();
    cy.get("div.col-lg-11 span").click();
  });
});
