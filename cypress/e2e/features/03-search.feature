Feature: Search the website for specific products

  Scenario Outline: Verify that user can search for products using the product name
    When User searches for "<searchText>" and view the results
    Then The results should contain the entered "<searchText>"

    Examples: 
      | searchText |
      | laptop     |
      | apple      |
      | nike       |
