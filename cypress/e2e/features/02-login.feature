Feature: Login to the website

  Rule: User logs in with valid data

    Scenario: Verify that user can login with valid data
      Given You open the login page
      When You enter a registered email
      And You enter the password
      And You click on the login button
      Then You should be logged in successfully

  Rule: User logs out from the website

    Scenario: Verify that logged in user can logout from the website
      Given You open the login page
      And You enter a registered email
      And You enter the password
      And You click on the login button
      And You should be logged in successfully
      When You click on logout button
      Then You should be logged out successfully

  Rule: User logs in with invalid data

    Scenario: Verify that user can't login with non registered email
      Given You open the login page
      When You enter a non registered email
      And You enter the password
      And You click on the login button
      Then Error message appears containing that "Login was unsuccessful. Please correct the errors and try again.No customer account found"

    Scenario: Verify that user can't login with invalid password
      Given You open the login page
      When You enter a registered email
      And You enter a wrong password
      And You click on the login button
      Then Error message appears containing that "Login was unsuccessful. Please correct the errors and try again.The credentials provided are incorrect"

    @admin
    Scenario: Verify that registered user can't login to the admin portal with the user credentials
      Given You open the admin portal
      When You enter a registered email
      And You enter a wrong password
      And You click on the login button
      Then Error message appears containing that "Login was unsuccessful. Please correct the errors and try again.No customer account found"
