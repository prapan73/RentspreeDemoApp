describe("start app", () => {
  it("open app", () => {
    cy.visit("http://localhost:3000");
  });

  it("add items to cart", () => {
    var i = 0;
    cy.get(".add-item").each(($el) => {
      if (i < 2) cy.wrap($el).click();
      i++;
    });
  });

  it("continue order", () => {
    cy.get("#continueOrder").click();
  });

  it("reset cart", () => {
    cy.get("#resetCart").click();
  });
});
