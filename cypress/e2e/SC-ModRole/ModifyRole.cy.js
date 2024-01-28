describe("ModifyRole", () => {
  it("tests ModifyRole", () => {
    cy.viewport(969, 658);
    cy.visit('http://18.207.217.149/')
    cy.get('#userName').type('superadmin')
    cy.get('#password').type('superadmin')
    cy.get('#loginButton').click()
    cy.get("#leMenu > ul > li:nth-of-type(3) > a").click();
    cy.get("li.open > ul > li:nth-of-type(3) > ul > li:nth-of-type(3) > a").click({force: true});
    cy.get("tr:nth-of-type(6) a.btn-info > span").click();
    cy.get("#roleInformation > div:nth-of-type(1) > input").click();
    cy.get("#contain > div:nth-of-type(2) > div > div:nth-of-type(1)").click();
    cy.get("#roleInformation > div:nth-of-type(1) > input").type("marketing");
    cy.get("#submit").click();
  });
});
