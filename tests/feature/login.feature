Feature: OrangeHRM Login

  Scenario: Verify OrangeHRM Login
  
    Given open the firefox browser
    Given navigate the application
    When enter the username
    When enter the password
    When click on Login
    Then verify welcome page
    When click on logout