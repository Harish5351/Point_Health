const { Key } = require('selenium-webdriver');

class App_page
{
     
    async initial_setup ()
    {   
        console.log("initial setup in App page");
        this.driver=global.driver
        this.sleep = require('sleep');
        this.By = global.By;
        this.until=global.until;
        this.Get_Started_xpath=this.By.xpath("//android.widget.TextView[@text='Get Started']");
        this.Account_Option_xpath=this.By.xpath("(//android.widget.TextView[@text='Account'])");
        this.SignIn_Option_xpath=this.By.xpath("//android.widget.TextView[@text='Sign In']");
        this.Browser_Option_xpath=this.By.xpath("//android.widget.TextView[contains(@text,'Chrome')]");
        this.Just_click_xpath=this.By.xpath("//android.widget.Button[@text='Just once']");
        this.Email_xpath=this.By.xpath("//android.widget.EditText[contains(@resource-id,'username')]");
        this.Password_xpath=this.By.xpath("//android.widget.EditText[contains(@resource-id,'password')]");
        this.SignIn_Button_xpath=this.By.xpath("//android.widget.Button[@text='Sign In']");
        
    }
    
    async Start ()
    {
        console.log("Starting...")
        var Start_button = await this.driver.wait(this.until.elementLocated(this.Get_Started_xpath), 20000)  
        console.log("Button found")
        await Start_button.click()
        console.log("Button clicked")   
    }
    async goto_option (option_name)
    {
        // this.path=String(this.Option_xpath).replace("XXX",option_name)
        // console.log("Path after replacing "+this.path)
        if (option_name== "Account")
        {
            var account_option =  await this.driver.wait(this.until.elementLocated(this.Account_Option_xpath),20000); 
        await account_option.click()
        } else if (option_name=="Sign In")
        {
            var SignIn_Option = await this.driver.wait(this.until.elementLocated(this.SignIn_Option_xpath),20000)
            await SignIn_Option.click()
        }  
        
        //var allow_button = await this.driver.wait(this.until.elementLocated(this.Allow_button_xpath),20000)
    
    }
    
    // async SignIn_Option()
    // {
    //     // this.path=String(this.Page_heading_xpath).replace("XXX",option_name)
    //     // console.log("Path after replacing "+this.path)
        

    //     //this.page = await this.driver.wait(this.until.elementLocated(this.Page_heading_xpath),20000);
    //     //var flag = await this.page.isDisplayed()
       

    // }

    async browser_option()
    {
        // this.path=String(this.Page_heading_xpath).replace("XXX",option_name)
        // console.log("Path after replacing "+this.path)
        var Browser_Option = await this.driver.wait(this.until.elementLocated(this.Browser_Option_xpath),20000)
        await Browser_Option.click()

        var Just_click = await this.driver.wait(this.until.elementLocated(this.Just_click_xpath));
        await Just_click.click()

        //this.page = await this.driver.wait(this.until.elementLocated(this.Page_heading_xpath),20000);
        //var flag = await this.page.isDisplayed()
       

    }


    async enter_email(usermail)
    {
        var email = await this.driver.wait(this.until.elementLocated(this.Email_xpath),20000);
        await email.clear()
        await email.sendKeys(usermail)
    }

    async enter_password(pwd)
    {
        var password = await this.driver.wait(this.until.elementLocated(this.Password_xpath),20000);
        await password.clear()
        await password.sendKeys(pwd)
    }

    async SigninBtn()
    {
        var SignIn_Button = await this.driver.wait(this.until.elementLocated(this.SignIn_Button_xpath),20000);
        await SignIn_Button.click();
    }


    
}module.exports=new App_page();