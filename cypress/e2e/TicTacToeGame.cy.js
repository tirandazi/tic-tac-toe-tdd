// const winSequence = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6],
// ];

describe("Testing the tic-tac-toe game", () => {
  it("Should declare X as winner", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-testid="ticButton"]').eq(0).click();
    cy.get('[data-testid="ticButton"]').eq(4).click();
    cy.get('[data-testid="ticButton"]').eq(1).click();
    cy.get('[data-testid="ticButton"]').eq(3).click();
    cy.get('[data-testid="ticButton"]').eq(2).click();

    cy.contains("Winner: X");
  });

  it("Should declare O as winner", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-testid="ticButton"]').eq(4).click();
    cy.get('[data-testid="ticButton"]').eq(8).click();
    cy.get('[data-testid="ticButton"]').eq(3).click();
    cy.get('[data-testid="ticButton"]').eq(7).click();
    cy.get('[data-testid="ticButton"]').eq(2).click();
    cy.get('[data-testid="ticButton"]').eq(6).click();

    cy.contains("Winner: O");
  });

  it("Should declare O as winner", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-testid="ticButton"]').eq(0).click();
    cy.get('[data-testid="ticButton"]').eq(1).click();
    cy.get('[data-testid="ticButton"]').eq(2).click();
    cy.get('[data-testid="ticButton"]').eq(4).click();
    cy.get('[data-testid="ticButton"]').eq(3).click();
    cy.get('[data-testid="ticButton"]').eq(7).click();

    cy.contains("Winner: O");
  });
});
