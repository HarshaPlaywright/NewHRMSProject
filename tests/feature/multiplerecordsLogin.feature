Feature: MultipleRecord Handling OrangeHRM Login 

  Scenario: Retesting MultipleRecord Handling Login
  
    Given open the firefox browser
    Given navigate the application
    When enter the username "<loginusername>"
    When enter the password "<loginpassword>"
    When click on Login
    Then verify welcome page
    When click on logout



    Examples:

    |loginusername|loginpassword|
    |username|password|