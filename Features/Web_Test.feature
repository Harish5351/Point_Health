Feature: Calculator Web Feature

Scenario:[Smoke, Demo] Verify the basic calculator operations on web
Given I am on the calculator page
When I click on button "7"
And I click on operator button "-"
And I click on button "2"
Then I see result as " 5"