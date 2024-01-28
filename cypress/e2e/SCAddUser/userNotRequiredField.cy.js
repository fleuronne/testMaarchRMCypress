describe("userNotRequiredField", () => {
  it("tests userNotRequiredField", () => {
    cy.viewport(969, 658);
    cy.visit("http://18.207.217.149/");
    cy.get("#userName").click();
    cy.get("#userName").type("superadmin");
    cy.get("#password").type("superadmin");
    cy.get("#loginButton").click();
    cy.get("#leMenu > ul > li:nth-of-type(3) > a").click();
    cy.get("li.open > ul > li:nth-of-type(3) li:nth-of-type(1) > a").click({force: true});
    cy.get("#user_newUser").click();
    cy.get("#password").click();
    cy.get("#password").type("1234");
    cy.get("#verification").click();
    cy.get("#verification").type("1234");
    cy.get("#user_userInformationForm > div > div:nth-of-type(1) input").click();
    cy.get("#user_userInformationForm > div > div:nth-of-type(1) input").type("lesly");
    cy.get("#emailAddress").click();
    cy.get("#emailAddress").type("vinnyngaleu1@gmail.com");
    cy.get("#page-wrapper div:nth-of-type(2) > ul > li:nth-of-type(2) > a").click();
    cy.get("#userRoleTab a:nth-of-type(1)").click();
    cy.get("#orgNav > a").click();
    cy.get("#orgTypeahead").click();
    cy.get("#orgTypeahead").type("sec");
    cy.get("span > div > span").click();
    cy.get("#addOrg").click();
    cy.get("#user_saveUser").click();
  });
});
