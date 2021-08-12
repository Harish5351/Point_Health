const assert = require('assert');
app_obj =require('../Pages/App_Test_Page');

module.exports =class App_reusasble_steps{
  

    User_should_on_Starting_Page = (given) =>{
    given('User should on Starting Page', async () => {
    this.driver=global.driver
            await reporter.startStep("User should on Starting Page")
            console.log("Step1");
            await app_obj.initial_setup ()            
            const screenshot = await this.driver.takeScreenshot();
            await reporter.addAttachment("Screenshot", Buffer.from(screenshot, 'base64'), "image/png");
            reporter.endStep()
        });
    }

    I_click_on_Button = (when) =>{
    when(/^I click on "(.*)" Button$/, async (button_name) => {
    await reporter.startStep('User taps on '+button_name + ' button')
    console.log("Step2");   
    await app_obj.Start();
    const screenshot = await this.driver.takeScreenshot();
    await reporter.addAttachment("Screenshot", Buffer.from(screenshot, 'base64'), "image/png");
    reporter.endStep()

    });    
}

I_am_on_Point_Health_Homepage = (then) =>{
    then('I am on Point Health Homepage', async () => {
            await reporter.startStep('User Should on Homepage')
            const screenshot = await this.driver.takeScreenshot();
            await reporter.addAttachment("Screenshot", Buffer.from(screenshot, 'base64'), "image/png");
            reporter.endStep()
        });
    }


    I_click_on_option_name = (and) =>{
    and(/^I click on "(.*)" Option$/, async (option_name) => {
            await reporter.startStep('I click on option' +option_name)
            await app_obj.goto_option(option_name);
            const screenshot = await this.driver.takeScreenshot();
            await reporter.addAttachment("Screenshot", Buffer.from(screenshot, 'base64'), "image/png");
            reporter.endStep()
        });
    }

    // I_click_on_Sign_In_option = (and) =>{
    //     and(/^I click on "(.*)" option$/, async (signin) => {
    //             await reporter.startStep('I click on option'+signin)
    //             await app_obj.SignIn_Option();
    //             const screenshot = await this.driver.takeScreenshot();
    //             await reporter.addAttachment("Screenshot", Buffer.from(screenshot, 'base64'), "image/png");
    //             reporter.endStep()
    //         });
    //     }

    User_should_navigated_to_browser_which_contain_respective_fields_of_Sign_In = (then) =>{
    then('User should navigated to browser which contain respective fields of Sign In', async () => {
    await reporter.startStep('User should navigated to Browser page')
    await app_obj.browser_option();
    const screenshot = await this.driver.takeScreenshot();
    await reporter.addAttachment("Screenshot", Buffer.from(screenshot, 'base64'), "image/png");
    reporter.endStep()
    
});
}
I_enter_credentials_in_email_as = (and) =>{
and(/^I enter credentials in email as "(.*)"$/, async (usermail) => {
    await reporter.startStep('User enters email as '+ usermail)
    await app_obj.enter_email(usermail);
    const screenshot = await this.driver.takeScreenshot();
    await reporter.addAttachment("Screenshot", Buffer.from(screenshot, 'base64'), "image/png");
    reporter.endStep()

});
}

I_enter_credentials_in_password_as = (and) =>{
    and(/^I enter credentials in password as "(.*)"$/, async (pwd) => {
        await reporter.startStep('User enters email as '+ pwd)
        await app_obj.enter_password(pwd);
        const screenshot = await this.driver.takeScreenshot();
        await reporter.addAttachment("Screenshot", Buffer.from(screenshot, 'base64'), "image/png");
        reporter.endStep()
    
    });
    }
    User_should_see_Homepage = (then) =>{
then('User should see Homepage', async () => {
    await reporter.startStep('User should see Homepage')
    console.log("Homepage Screen should be displayed")
    await app_obj.SigninBtn()
    const screenshot = await this.driver.takeScreenshot();
    await reporter.addAttachment("Screenshot", Buffer.from(screenshot, 'base64'), "image/png");
    reporter.endStep()
   

});
}
}