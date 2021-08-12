web_obj =require('../Pages/Web_Test_Page');

module.exports =class Web_reusasble_steps{

    I_am_on_the_calculator_page = (given) =>{
given(/^I am on the calculator page$/ ,async( )=>{
  this.driver=global.driver        
    await reporter.startStep("I am on the calculator page")
    await web_obj.initial_setup ()
    await web_obj.homePage();
    const screenshot = await this.driver.takeScreenshot();
    await reporter.addAttachment("Screenshot", Buffer.from(screenshot, 'base64'), "image/png");
    reporter.endStep()                  
   } );
}


I_click_on_button = (when) =>{
  when(/^I click on button "(.*)"$/, async( number )=>{
      reporter.startStep("Click on First Number")
      await web_obj.clickNumber(number);  
      const screenshot = await this.driver.takeScreenshot();
      await reporter.addAttachment("Screenshot", Buffer.from(screenshot, 'base64'), "image/png");
      reporter.endStep()          
  } );
}

I_click_on_operator_button = (and) =>{
  and(/^I click on operator button "(.*)"$/, async( operator ) =>{
     await reporter.startStep("Click on Operator")
     await web_obj.clickOperator(operator); 
     const screenshot = await this.driver.takeScreenshot();
     await reporter.addAttachment("Screenshot", Buffer.from(screenshot, 'base64'), "image/png");
     await reporter.endStep()
  } );
}

I_click_on_button = (and) =>{
  and(/^I click on button "(.*)"$/, async( number ) =>{
      await reporter.startStep("Click on Second Number")
      await web_obj.clickNumber(number);
      const screenshot = await this.driver.takeScreenshot();
      await reporter.addAttachment("Screenshot", Buffer.from(screenshot, 'base64'), "image/png");
      await reporter.endStep()
  } );
}

I_see_result_as = (then) =>{
  then(/^I see result as "(.*)"$/, async( result ) =>{
     await reporter.startStep("Result")
     await web_obj.Verify_Result(result);
     const screenshot = await this.driver.takeScreenshot();
     await reporter.addAttachment("Screenshot", Buffer.from(screenshot, 'base64'), "image/png");
     await reporter.endStep()  
     
  } );
}
}