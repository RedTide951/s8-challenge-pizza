describe("Pizza", () => {
  it("should enter an text in the input", () => {
    cy.visit("http://localhost:5173/");
    cy.get('[data-id="textInput"]').type("Hello World");
  });
  it("should select more than one ingridients", () => {
    //
  });
  it("should submit a form", () => {
    //
  });
});
