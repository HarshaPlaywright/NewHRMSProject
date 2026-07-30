Feature: OrangeHRM Login

  Scenario: datatable approch for OrangeHRM Login
  
    Given open the firefox browser
    Given navigate the application
    When enter the usernamelogin
    |username|
    |Admin@8899|
    When enter the passwordlogin
    |password|
    |Admin@456|
    When click on Login
    Then verify welcome page
    When click on logout

    Scenario: datatable approch with header for OrangeHRM Login
  
    Given open the firefox browser
    Given navigate the application
    When enter the usernamelogin
    |usernamelogin|
    |username|
    When enter the passwordlogin
    |passwordlogin|
    |password|
    When click on Login
    Then verify welcome page
    When click on logout