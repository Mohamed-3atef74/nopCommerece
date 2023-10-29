class Checkout {
  orderNumber;
  billingAddress = {
    country: () => cy.get("#BillingNewAddress_CountryId"),
    city: () => cy.get("#BillingNewAddress_City"),
    address1: () => cy.get("#BillingNewAddress_Address1"),
    zipCode: () => cy.get("#BillingNewAddress_ZipPostalCode"),
    phoneNumber: () => cy.get("#BillingNewAddress_PhoneNumber"),
    continueButton: () =>
      cy.get('[class="button-1 new-address-next-step-button"]').eq(0),
  };
  shippingAddress = {
    continueButton: () =>
      cy.get('[class="button-1 shipping-method-next-step-button"]'),
  };
  paymentMethod = {
    continueButton: () =>
      cy.get('[class="button-1 payment-method-next-step-button"]'),
  };
  paymentInfo = {
    continueButton: () =>
      cy.get('[class="button-1 payment-info-next-step-button"]'),
  };
  confirmOrder = {
    confirmButton: () =>
      cy.get('[class="button-1 confirm-order-next-step-button"]'),
  };
  orderConfirmed = {
    container: () => cy.get('[class="page-body checkout-data"]'),
    successMessage: () => this.orderConfirmed.container().find(".title"),
    orderNumber: () => this.orderConfirmed.container().find(".order-number"),
    continueButton: () =>
      this.orderConfirmed
        .container()
        .find('[class="button-1 order-completed-continue-button"]'),
  };
}

const checkoutPage = new Checkout();
export default checkoutPage;
