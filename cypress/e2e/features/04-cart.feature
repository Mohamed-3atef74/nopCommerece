Feature: User add products to the shopping cart and manage them there

  Scenario: Verify that the cart's total price is calculated correctly
    Given User searches for "lenovo" and view the results
    And User adds the products to the cart
    When User opens the cart
    Then Cart total should be calculated correctly
