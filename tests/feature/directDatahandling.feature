Feature: DirectData Handling OrangeHRM Login 

  Scenario: Direct Data Handling Login
  
    Given open the firefox browser
    Given navigate the application
    When enter the username "username"
    When enter the password "password"
    When click on Login
    Then verify welcome page
    When click on logout