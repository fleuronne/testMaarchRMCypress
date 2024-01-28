describe("fieldSuppStoc", () => {
  it("tests fieldSuppStoc", () => {
    cy.viewport(998, 658);
    cy.visit("http://18.207.217.149/");
    cy.get('#userName').type('superadmin')
    cy.get('#password').type('superadmin')
    cy.get('#loginButton').click()
    cy.get("#leMenu > ul > li:nth-of-type(3) > a > i").click();
    cy.get("li:nth-of-type(7) li:nth-of-type(1) > a").click({force:true});
    cy.get("#addRepository").click();
    cy.get("#repositoryForm > div:nth-of-type(2) input").click();
    cy.get("#repositoryForm > div:nth-of-type(2) input").type("su");
    cy.get("#repositoryType").click();
    cy.get("#repositoryType").type("fileSystem");
    cy.get("div:nth-of-type(4) input").click();
    cy.get("div:nth-of-type(4) input").type("/var/www/laabs");
    cy.get("div:nth-of-type(5) input").click();
    cy.get("div:nth-of-type(5) input").type("1");
    cy.get("div:nth-of-type(5) input").click();
    cy.get("#validateForm").click();
  });
});
