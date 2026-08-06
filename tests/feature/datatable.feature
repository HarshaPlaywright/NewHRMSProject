Feature: OrangeHRM Login

  Scenario: datatable approch for OrangeHRM Login
  
    Given open the firefox browser
    Given navigate the application
    When enter the userlog
    |username|
    |username|
    When enter the passwordlog
    |password|
    |password|
    When click on Login
    Then verify welcome page
    When click on logout

   