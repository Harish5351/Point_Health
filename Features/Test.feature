Feature: Unit Test Feature
Scenario Outline: Verify the calculator operations for scientific calculator
When I click on first number <num1>
Then I see the result is <res>
Examples:
    | num1        | res                    |
    | true        |this number is boolean  |
    | String      |cant enter string       |
    | 3           |enter correct number    |
    | 4           |correct number          |
    