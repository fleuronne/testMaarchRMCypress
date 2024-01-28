describe("WithdrawField", () => {
  it("tests WithdrawField", () => {
    cy.viewport(952, 658);
    cy.visit("http://18.207.217.149/");
    cy.get("#userName").click();
    cy.get("#userName").type("superadmin");
    cy.get("#password").type("superadmin");
    cy.get("#loginButton").click();
    cy.get("#leMenu > ul > li:nth-of-type(3) > a").click();
    cy.get("li.open > ul > li:nth-of-type(3) li:nth-of-type(1) > a").click({force: true});
    cy.get("#maarchRM_rz4m01-bnyb-5pkw19 button > span").click();
    cy.get("#user_userInformationForm > div > div:nth-of-type(1) input").click();
    cy.get("#user_userInformationForm > div > div:nth-of-type(1) input").type("");
    cy.get("#user_saveUser").click();
  });
});
