class Home {
  footer = {
    registerButton: () => cy.get(".ico-register"),
    loginButton: () => cy.get(".ico-login"),
    logoutButton: () => cy.get(".ico-logout"),
    wishListButton: () => cy.get(".ico-wishlist"),
    cartButton: () => cy.get(".cart-label"),
    myAccountButton: () => cy.get(".ico-account"),
  };

  search = {
    box: () => cy.get("#small-searchterms"),
    button: () => cy.get('[class="button-1 search-box-button"]'),
  };

  product = {
    details: () => cy.get('[class="details"]'),
    name: () => cy.get('[class="product-title"]'),
    addToCartButton: () =>
      cy.get('[class="button-2 product-box-add-to-cart-button"]'),
  };
  cartToaster = {
    message: () => cy.get('[class="bar-notification success"]'),
    closeButton: () => cy.get(".close"),
  };
}

const homePage = new Home();
export default homePage;
