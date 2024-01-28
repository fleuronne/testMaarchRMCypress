describe("AddSupportStoc", () => {
  it("tests AddSupportStoc", () => {
    cy.viewport(998, 658);
    cy.visit("http://18.207.217.149/");
    cy.get('#userName').type('superadmin')
    cy.get('#password').type('superadmin')
    cy.get('#loginButton').click()
    cy.get("#leMenu > ul > li:nth-of-type(3) > a > i").click();
    cy.get("li:nth-of-type(7) li:nth-of-type(1) > a").click({force:true});
    cy.get("#addRepository").click();
    cy.get("#repositoryForm > div:nth-of-type(1) input").click();
    cy.get("#repositoryForm > div:nth-of-type(1) input").type("support1");
    cy.get("#repositoryForm > div:nth-of-type(2) input").click();
    cy.get("#repositoryForm > div:nth-of-type(2) input").type("support");
    cy.get("#repositoryType").click();
    cy.get("#repositoryType").type("fileSystem");
    cy.get("div:nth-of-type(4) input").click();
    cy.get("div:nth-of-type(4) input").type("var/www/laabs");
    cy.get("div:nth-of-type(5) input").type("1");
    cy.get("div:nth-of-type(5) input").click();
    cy.get("div:nth-of-type(5) input").type("2");
    cy.get("div:nth-of-type(5) input").click();
    cy.get("#optionName").click();
    cy.get("#optionName").type("sup");
    cy.get("#optionValue").click();
    cy.get("#optionValue").type("2");
    cy.get("div.col-md-5 i").click();
    cy.get("#validateForm > i").click();
    cy.get("div:nth-of-type(4) input").click();
    cy.get("div:nth-of-type(4) input").type("/var/www/laabs");
    cy.get("#validateForm").click();
  });
});
