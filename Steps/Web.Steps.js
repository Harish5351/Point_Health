const { defineFeature, loadFeature } = require('jest-cucumber');
base_obj =require('../Pages/Base_Page');
const Wpp_reusasble_step = require("../Reusable_Steps/Web_Reusable_Steps");
const wpp_reuse = new Wpp_reusasble_step()

const feature = loadFeature('./features/Web_Test.feature',{
    errors: {
        missingScenarioInStepDefinitions: false, // Error when a scenario is in the feature file, but not in the step definition
        missingStepInStepDefinitions: false, // Error when a step is in the feature file, but not in the step definitions
        missingScenarioInFeature: false, // Error when a scenario is in the step definitions, but not in the feature
        missingStepInFeature: false, // Error when a step is in the step definitions, but not in the feature
      }
});
 
defineFeature(feature, test => {

    test('[Smoke, Demo] Verify the basic calculator operations on web', ({ given, when, and, then }) => {
        wpp_reuse.I_am_on_the_calculator_page(given)
        wpp_reuse.I_click_on_button(when)
        wpp_reuse.I_click_on_operator_button(and)
        wpp_reuse.I_click_on_button(and)
        wpp_reuse.I_see_result_as(then)

    });
  
    
});