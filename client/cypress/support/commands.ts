Cypress.Commands.add("login", (email: string, password: string) => {
  cy.contains("button", "Login").should("be.visible").click();
  cy.get('[data-cy="email"]').should("be.visible").click().type(email);
  cy.get('[data-cy="password"]').should("be.visible").click().type(password);
  cy.contains("button", "Sign in").should("be.visible").click();
});

Cypress.Commands.add("checkErrorMessage", (message: string) => {
  cy.contains(message).should("be.visible");
});
