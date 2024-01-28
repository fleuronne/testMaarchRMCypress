describe("AddPlanHeb", () => {
  it("tests AddPlanHeb", () => {
    cy.viewport(998, 658);
    cy.visit("http://18.207.217.149/");
    cy.get('#userName').type('superadmin')
    cy.get('#password').type('superadmin')
    cy.get('#loginButton').click()
    cy.get("#leMenu > ul > li:nth-of-type(3) > a").click();
    cy.get("li.open > ul > li:nth-of-type(4) > a").click({force:true});
    cy.get("#scheduleNewTask").click();
    cy.get("#name").click();
    cy.get("#name").type("plan2");
    cy.get("#taskId").click();
    cy.get("#taskId").type("03");
    cy.get("div:nth-of-type(4) label:nth-of-type(2)").click();
    cy.get("#weekDaySelector > div label:nth-of-type(1)").click();
    cy.get("#weekDaySelector label:nth-of-type(4) > input").click();
    cy.get("div:nth-of-type(8) select.col-xs-4").click();
    cy.get("div:nth-of-type(8) select.col-xs-4").type("16");
    cy.get("#addTask").click();
  });
});
