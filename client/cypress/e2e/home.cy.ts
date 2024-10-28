describe("Heroes App", () => {
  beforeEach(() => {
    cy.visit("/heroes");
  });

  it("should display login requirement message on like click", () => {
    cy.get('[data-cy="like"]').first().click();
    cy.checkErrorMessage("You must log in to like.");
    cy.contains("button", "Ok").should("be.visible").click();
    cy.contains("You must log in to like.").should("not.exist");
  });

  it("should display login requirement message on hire click", () => {
    cy.get("[data-cy='money']").first().click();
    cy.checkErrorMessage("You must log in to hire this hero.");
    cy.contains("button", "Ok").should("be.visible").click();
    cy.contains("You must log in to hire this hero.").should("not.exist");
  });
});
