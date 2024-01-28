describe("eventWeak", () => {
  it("tests eventWeak", () => {
    cy.viewport(964, 658);
    cy.visit('http://18.207.217.149/')
    cy.get('#userName').type('superadmin')
    cy.get('#password').type('superadmin')
    cy.get('#loginButton').click()
    cy.get("#leMenu span").click();
    cy.get("li:nth-of-type(2) li:nth-of-type(4) > a").click({force:true});
    cy.get("#btnAddEventTypeForm").click();
    cy.get("#formDomain").click();
    cy.get("#formDomain").type("x");
    cy.get("#formType").click();
    cy.get("#formType").type("n");
    cy.get("#formMessage").click();
    cy.get("#formMessage").type("o");
    cy.get("label.active").click();
    cy.get("#saveEventFormat").click();
  });
});
