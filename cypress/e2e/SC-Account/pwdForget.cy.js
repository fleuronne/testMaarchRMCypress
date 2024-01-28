describe("pwdForget", () => {
  it("tests pwdForget", () => {
    cy.viewport(969, 658);
    cy.visit("http://18.207.217.149/");
    cy.get("#userName").click();
    cy.get("#userName").type("superadmin");
    cy.get("#forgotAccount").click();
    cy.get("#forgotAccountUsername").click();
    cy.get("#forgotAccountUsername").type("superadmin");
    cy.get("#forgotAccountEmail").click();
    cy.get("#forgotAccountEmail").type("vinnyngaleu11@gmail.com");
    cy.get("#forgotAccountSendButton").click();
  });
});
