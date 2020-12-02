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

  it("add order address", () => {
    cy.get("#address").type(
      "637/1 อาคารพร้อมพันธุ์ 1 ชั้น 2, Lat Phrao Rd, Chom Phon, Chatuchak, Bangkok 10900"
    );
  });

  it("order checkout", () => {
    cy.get("#checkout").click();
  });
});
