const { defineFeature, loadFeature } = require('jest-cucumber');
const { parse } = require('superagent');
const feature = loadFeature('./Features/API_Test.feature',{
  errors: {
    missingScenarioInStepDefinitions: false, // Error when a scenario is in the feature file, but not in the step definition
    missingStepInStepDefinitions: false, // Error when a step is in the feature file, but not in the step definitions
    missingScenarioInFeature: false, // Error when a scenario is in the step definitions, but not in the feature
    missingStepInFeature: false, // Error when a step is in the step definitions, but not in the feature
  }
 
});
const Api  = require("../Utils/ApiUtil")

defineFeature(feature, test => {

     let all
     let alls
  
   test('[Smoke] Verify the GET call for dummy website', ({ when, then }) => {
    when('I send a GET request to endpoint', async() => {
      await reporter.startStep("I send a GET request to endpoint")
     all = await Api.fetchGet()
     reporter.endStep()
    
    });

    then('I Verify body', async (docString) => {
     await reporter.startStep("I Verify body as : \n\n"+JSON.stringify(all.body.data))
     expect(all.body.data).toEqual(JSON.parse(docString))
     reporter.endStep()
       
    });
  })
   test('[Smoke] Verify the Post call for dummy website', ({ when, then }) => {

when('I send a POST request to endpoint with Body', async(docString) => {
    await reporter.startStep("I send a POST request to endpoint with Body")
    alls = await Api.fetchPost(docString)
    console.log(alls.body)
    reporter.endStep()
});

then(/^I Verify Status is "(.*)"$/,async (status) => {
    await reporter.startStep("I Verify Status as : "+ alls.status)
    expect(alls.status).toEqual(parseInt(status))
    reporter.endStep()
});

});

  
});
