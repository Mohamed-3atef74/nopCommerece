class Cart {
  product = {
    totalPrice: () => cy.get("tr td:nth-child(6)"),
  };
  totalCartPrice = () => {
    return cy.get(".value-summary");
  };
  termsCheckbox = () => {
    return cy.get("#termsofservice");
  };
  checkoutButton = () => {
    return cy.get("#checkout");
  };
}

const cartPage = new Cart();
export default cartPage;
