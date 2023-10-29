const {
  Given,
  When,
  Then,
} = require("@badeball/cypress-cucumber-preprocessor");
import cartPage from "../../pages/cart.pom";
import homePage from "../../pages/home.POM";

Given("User adds the products to the cart", () => {
  homePage.product.details().each((product, index) => {
    homePage.product.addToCartButton().eq(index).click();
    homePage.cartToaster
      .message()
      .should("be.visible")
      .then(() => {
        homePage.cartToaster.closeButton().click();
      });
  });
});

When("User opens the cart", () => {
  homePage.footer.cartButton().click();
});

Then("Cart total should be calculated correctly", () => {
  let calculatedTotalPrice = 0;
  cartPage.product.totalPrice().each((price) => {
    calculatedTotalPrice += parseFloat(
      price.text().split(":")[1].replace(/[$,]/g, "")
    );
  });
  cartPage.totalCartPrice().then((totalPrice) => {
    const actualTotalPrice = parseFloat(totalPrice.text().replace(/[$,]/g, ""));
    expect(calculatedTotalPrice).to.eq(actualTotalPrice);
  });
});
