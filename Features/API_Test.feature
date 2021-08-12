Feature: API Feature


Scenario:[Smoke] Verify the GET call for dummy website
When I send a GET request to endpoint
Then I Verify body 
"""
      { 
                "id": 2,
                "email": "janet.weaver@reqres.in",
                "first_name": "Janet",
                "last_name": "Weaver",
                "avatar": "https://reqres.in/img/faces/2-image.jpg"
      }
"""

Scenario:[Smoke] Verify the Post call for dummy website
When I send a POST request to endpoint with Body 
"""
{
    "name": "morpheus",
    "job": "leader"
}
"""
Then I Verify Status is "201"

