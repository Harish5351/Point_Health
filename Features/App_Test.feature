Feature: Mobile App Feature

# Scenario: [Smoke, Demo] Verify User can search for Doctor Details by name for specific location
# Given I am on Point Health homepage
# When User taps on "Get Started" button
# And User taps on "Doctors" option
# And User is navigated to "Doctors" search page 
# And User enters speciality as "Cardiology" and location "60007"
# Then Doctors list is displayed

Scenario:[Smoke, Demo] Verify the User can Sign In with valid credentials
Given User should on Starting Page
When I click on "Get Started" Button
Then I am on Point Health Homepage
And I click on "Account" Option
And I click on "Sign In" Option
Then User should navigated to browser which contain respective fields of Sign In
And I enter credentials in email as "hekal@pointhealth.com"
And I enter credentials in password as "Harry5351"
Then User should see Homepage



