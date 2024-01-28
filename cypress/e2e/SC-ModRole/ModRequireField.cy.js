describe("ModRequireField", () => {
  it("tests ModRequireField", () => {
    cy.viewport(969, 658);
    cy.visit("http://18.207.217.149/");
    cy.get('#userName').type('superadmin')
    cy.get('#password').type('superadmin')
    cy.get('#loginButton').click()
    cy.get("#leMenu > ul > li:nth-of-type(3) > a > i").click();
    cy.get("li.open > ul > li:nth-of-type(3) > ul > li:nth-of-type(3) > a").click({force: true});
    cy.get("tr:nth-of-type(7) a.btn-info").click();
    cy.get("#contain > div:nth-of-type(2) > div > div:nth-of-type(1) div.panel-body").click();
    cy.get("#roleInformation > div:nth-of-type(1) > input").click();
    cy.get("#roleInformation > div:nth-of-type(1) > input").type("");
    cy.get("#submit").click();
  });
});
