describe("Hero actions", () => {
  beforeEach(() => {
    cy.visit("/heroes");
    cy.login("test@test.com", "test123");
  });

  context("Fans Actions", () => {
    it("should increase the fans count when liking a hero", () => {
      cy.get('[data-cy="fans"]')
        .first()
        .then(($fans) => {
          const initialFansCount = parseInt($fans.text());
          cy.get('[data-cy="like"]').first().click();
          cy.get('[data-cy="fans"]')
            .first()
            .should(($newFans) => {
              const newFansCount = parseInt($newFans.text());
              expect(newFansCount).to.eq(initialFansCount + 1);
            });
        });
    });
  });

  context("Hire Actions", () => {
    it("should allow hiring the hero and increase the saves count", () => {
      cy.get('[data-cy="saves"]')
        .first()
        .then(($saves) => {
          const initialSavesCount = parseInt($saves.text());
          cy.get("[data-cy='money']").first().click();
          cy.contains("Yes").click();
          cy.get('[data-cy="saves"]')
            .first()
            .should(($newSaves) => {
              const newSavesCount = parseInt($newSaves.text());
              expect(newSavesCount).to.eq(initialSavesCount + 1);
            });
        });
    });

    it("should close the modal and not change saves count when clicking 'No'", () => {
      cy.get('[data-cy="saves"]')
        .first()
        .then(($saves) => {
          const initialSavesCount = parseInt($saves.text());
          cy.get("[data-cy='money']").first().click();
          cy.contains("No").click();
          cy.get(".modal").should("not.exist");
          cy.get('[data-cy="saves"]')
            .first()
            .should(($savesAfter) => {
              const finalSavesCount = parseInt($savesAfter.text());
              expect(finalSavesCount).to.eq(initialSavesCount);
            });
        });
    });
  });
});
