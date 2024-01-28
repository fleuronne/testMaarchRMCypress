describe("weakGrappe", () => {
  it("tests weakGrappe", () => {
    cy.viewport(998, 658);
    cy.visit("http://18.207.217.149/");
    cy.get('#userName').type('superadmin')
    cy.get('#password').type('superadmin')
    cy.get('#loginButton').click()
    cy.get("#leMenu > ul > li:nth-of-type(3) > a > i").click();
    cy.get("li:nth-of-type(7) li:nth-of-type(2) > a").click({force:true});
    cy.get("div.panel-heading span").click();
    cy.get("#clusterName").click();
    cy.get("#clusterName").type("s");
    cy.get("#clusterDescription").click();
    cy.get("#clusterDescription").type("pour la compta");
    cy.get("#repositoryId").click();
    cy.get("#repositoryId").type("maarchRM_rz6kft-gw3h-yuv6rj");
    cy.get("#readPriority").type("1");
    cy.get("#readPriority").click();
    cy.get("#writePriority").type("1");
    cy.get("#writePriority").click();
    cy.get("#deletePriority").type("1");
    cy.get("#deletePriority").click();
    cy.get("div > div > div:nth-of-type(2) button").click();
    cy.get("#submit").click();
  });
});
