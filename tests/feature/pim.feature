@smoke
Feature: OrangeHRM PIM

Background:
    Given open the firefox browser
    And navigate the application
    When enter the lusername
    And enter the lpassword
    And click on Login
    Then verify welcome page

@Regression
Scenario: AddEmployee

    When click on PIM menu
    And click on Add Employee
    And click on iframe
    And enter first name as "Akki"
    And enter middle name as "la"
    And enter last name as "DSU"
    And click on Save button
    And click on Back button
    And click on selectoption from dropdown
    And enter searchFor as "Akki"
    And click on search button
    Then verify employee is added successfully


