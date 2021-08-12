const { defineFeature, loadFeature } = require('jest-cucumber');
const units  = require("../DeveloperCode/UnitTest")
const feature = loadFeature('./Features/Test.feature');

defineFeature(feature, test => {

test('Verify the calculator operations for scientific calculator', ({ when,then }) => {

    let chinm;
    when(/^I click on first number (.*)$/, async(num1) => {

      if(num1=='true'|| num1 == 'false') 
      {
          num1 = JSON.parse(num1)
          
      }
      else if(num1 =='1' ||num1 =='2'||num1 =='3'||num1 =='4')
      {
        num1 = parseInt(num1)
      }
      else if(typeof(num1)== 'string')
      {
        num1 = num1
      }  
      
       
     await units.fetchUser1(num1).then((responses)=>
      {
      
        chinm = responses
        console.log(chinm)
       
      })
    
    });
    
    then(/^I see the result is (.*)$/, (res) => {
    expect(chinm).toEqual(res)
    });



});

})
