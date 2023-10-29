Feature: User creates an order and checks out successfully

  Scenario: Verify that logged in user can create an order successfully
  Given User is logged in
    Given User has a product in the shopping cart
    When User accepts the terms of service and goes to the checkout page
    And User fills in the billing address
    And User selects the shipping method
    And User selects the payment method
    And User reviews the payment information
    And User confirms the order
    Then The order should be created successfully
    When User opens his account tab and opens the orders sub-tab
    Then The created order should be appearing
