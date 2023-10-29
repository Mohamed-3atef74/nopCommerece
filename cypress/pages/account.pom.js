class Account {
  ordersSubTab = {
    button: () => cy.get('[class="customer-orders inactive"] a'),
    details: () => cy.get(".order-list"),
    orderNumber: () => this.ordersSubTab.details().find(".title"),
  };
}

const accountPage = new Account();
export default accountPage;
