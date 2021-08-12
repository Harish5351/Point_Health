const { defineFeature, loadFeature } = require('jest-cucumber');
const App_reusasble_step = require("../Reusable_Steps/App_Reusable_Steps");
const app_reuse = new App_reusasble_step()

const feature = loadFeature('./Features/App_Test.feature', {
    errors: {
      missingScenarioInStepDefinitions: false, // Error when a scenario is in the feature file, but not in the step definition
      missingStepInStepDefinitions: false, // Error when a step is in the feature file, but not in the step definitions
      missingScenarioInFeature: false, // Error when a scenario is in the step definitions, but not in the feature
      missingStepInFeature: false, // Error when a step is in the step definitions, but not in the feature
    }
  });

defineFeature(feature, test => {
    
     
    // test('[Smoke, Demo] Verify User can search for Doctor Details by name for specific location', ({ given, when, and, then }) => {
    //     app_reuse.I_am_on_Point_Health_homepage(given);
    //     app_reuse.User_taps_on_button(when)
    //     app_reuse.User_taps_on_option(and)
    //     app_reuse.User_is_navigated_to_search_page(and)
    //     app_reuse.User_enters_speciality_and_location(and)
    //     app_reuse.Doctors_list_is_displayed(then)
    // });


    test('[Smoke, Demo] Verify the User can Sign In with valid credentials', ({ given, when, and, then }) => {
          app_reuse.User_should_on_Starting_Page(given)
          app_reuse.I_click_on_Button(when)
          app_reuse.I_am_on_Point_Health_Homepage(then)
          app_reuse.I_click_on_option_name(and)
          app_reuse.I_click_on_option_name(and)
          app_reuse.User_should_navigated_to_browser_which_contain_respective_fields_of_Sign_In(then)
          app_reuse.I_enter_credentials_in_email_as(and)
          app_reuse.I_enter_credentials_in_password_as(and)
          app_reuse.User_should_see_Homepage(then)
      
      });

   
}); 