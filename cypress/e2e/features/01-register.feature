Feature: Register to the website

  @register
  Rule: User registeres with valid data

    Scenario: Verify that user can register to the website with valid data
      Given You open the register page
      When You select 'Male' as the gender
      And You enter 'test' as the first name
      And You enter 'customer' as the last name
      And You enter '10-January-1999' as the birthDate
      And You enter a valid email
      And You enter 'My company' as the company name
      And You enter a valid password
      And You re-enter the password in the password confirmation
      And You click on register button
      Then You should be registered successfully and 'Your registration completed' message should appear

  Rule: User registeres with invalid data

    Scenario: Verify that user can't register with an already registered email
      Given You open the register page
      When You select 'Male' as the gender
      And You enter 'test' as the first name
      And You enter 'customer' as the last name
      And You enter '10-January-1999' as the birthDate
      And You enter an already registered email
      And You enter 'My company' as the company name
      And You enter a valid password
      And You re-enter the password in the password confirmation
      And You click on register button
      Then Error message appears containing that 'The specified email already exists'
