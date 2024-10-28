describe("Login", () => {
  beforeEach(() => {
    cy.visit("/heroes");
  });

  it("should login successfully", () => {
    cy.fixture("user").then((user) => {
      cy.login(user.validUser.email, user.validUser.password);
    });
  });

  it("should show an error message for invalid email", () => {
    cy.fixture("user").then((user) => {
      cy.login(user.invalidUser.email, user.invalidUser.password);
      cy.checkErrorMessage("Email is not valid");
    });
  });

  it("should show an error message when password is incorrect", () => {
    cy.fixture("user").then((user) => {
      cy.login(user.wrongPasswordUser.email, user.wrongPasswordUser.password);
      cy.checkErrorMessage("Invalid email or password");
    });
  });

  it("should show an error message when fields are empty", () => {
    cy.contains("button", "Login").should("be.visible").click();
    cy.contains("button", "Sign in").click();
    cy.checkErrorMessage("Email is required");
    cy.checkErrorMessage("Password is required");
  });

  it("should show an error message when email field is empty", () => {
    cy.contains("button", "Login").should("be.visible").click();
    cy.get('[data-cy="password"]').type("test123");
    cy.contains("button", "Sign in").click();
    cy.checkErrorMessage("Email is required");
  });

  it("should show an error message when password field is empty", () => {
    cy.contains("button", "Login").should("be.visible").click();
    cy.get('[data-cy="email"]').type("test@test.com");
    cy.contains("button", "Sign in").click();
    cy.checkErrorMessage("Password is required");
  });

  it("should log out successfully", () => {
    cy.login("test@test.com", "test123");
    cy.contains("Logout").click();
    cy.contains("Login").should("be.visible");
  });
});
