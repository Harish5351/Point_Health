Feature: Calculator Feature

@demo1
Scenario:[Calculate, Smoke] Verify Addition Operation
When I click on number "7"
And I click on operator "-"
And I click on number "5"
Then I see the result as "2"

@demo2
Scenario:[Calculate, Smoke] Verify Substraction Operation
When I click on number "170"
And I click on operator "+"
And I click on number "5"
Then I see the result as "175"