import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import homePage from "../../pages/home.POM";
import cartPage from "../../pages/cart.pom";
import checkoutPage from "../../pages/checkout.pom";
import accountPage from "../../pages/account.pom";

Given("User has a product in the shopping cart", () => {
  homePage.product.addToCartButton().eq(2).click();
  homePage.footer.cartButton().click();
});

When("User accepts the terms of service and goes to the checkout page", () => {
  cartPage.termsCheckbox().check();
  cartPage.checkoutButton().click();
});

When("User fills in the billing address", () => {
  checkoutPage.billingAddress.country().select("Egypt");
  checkoutPage.billingAddress.city().type("Cairo");
  checkoutPage.billingAddress.address1().type("My address");
  checkoutPage.billingAddress.zipCode().type("12345");
  checkoutPage.billingAddress.phoneNumber().type("01090300025");
  checkoutPage.billingAddress.continueButton().click();
});

When("User selects the shipping method", () => {
  checkoutPage.shippingAddress.continueButton().click();
});

When("User selects the payment method", () => {
  checkoutPage.paymentMethod.continueButton().click();
});

When("User reviews the payment information", () => {
  checkoutPage.paymentInfo.continueButton().click();
});

When("User confirms the order", () => {
  checkoutPage.confirmOrder.confirmButton().click();
});

Then("The order should be created successfully", () => {
  cy.url().should("contain", "completed");
  checkoutPage.orderConfirmed
    .successMessage()
    .should("contain.text", "Your order has been successfully processed!");
  checkoutPage.orderConfirmed.orderNumber().then((element) => {
    checkoutPage.orderNumber = element.text().split(":")[1].trim();
  });
});

// Then("The orders list should contain the created order", () => {
//   checkoutPage.orderConfirmed.orderNumber().then((element) => {
//     checkoutPage.orderNumber = element.text().split(":")[1].trim();
//   });
// });

When("User opens his account tab and opens the orders sub-tab", () => {
  homePage.footer.myAccountButton().click();
  accountPage.ordersSubTab.button().click();
});

Then("The created order should be appearing", () => {
  accountPage.ordersSubTab.orderNumber().then((element) => {
    const orderNumber = element.text().split(":")[1].trim();
    expect(orderNumber).to.eq(checkoutPage.orderNumber)
  });
});
