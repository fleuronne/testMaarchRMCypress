describe("requireField", () => {
  it("tests requireField", () => {
    cy.viewport(998, 658);
    cy.visit("http://18.207.217.149/");
    cy.get('#userName').type('superadmin')
    cy.get('#password').type('superadmin')
    cy.get('#loginButton').click()
    cy.get("#leMenu > ul > li:nth-of-type(3) > a").click();
    cy.get("li.open > ul > li:nth-of-type(4) > a").click({force:true});
    cy.get("#scheduleNewTask").click();
    cy.get("#name").click();
    cy.get("#name").type("plan");
    cy.get("#taskId").click();
    cy.get("#taskId").type("02");
    cy.get("#addTask").click();
  });
});
