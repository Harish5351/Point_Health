const {By,Key,Builder} = require("selenium-webdriver");

class Web_page
{
    async initial_setup ()
    {   
        this.driver=global.driver
        this.By = global.By;
        this.until=global.until;
        this.number_xpath="//div/span[@onclick='r(7)']"
        this.result="//div[@id='sciOutPut']"
    }

    async homePage ()
    {
        await this.driver.get("https://www.calculator.net/");  
    }
    async clickNumber (number)
    {
        let path=this.number_xpath.replace(/7/gi,number)
        await this.driver.findElement(this.By.xpath(path)).click()
      
    }
    async clickOperator(operator)
    {
        await this.driver.findElement(this.By.xpath('//span[@onclick="r(\''+operator+'\')"]')).click()
       
    }
   
    async Verify_Result(result)
    {   
        var ele=await(this.driver.findElement(this.By.xpath(this.result)))
        var text=await ele.getText();
        console.log(text);
        expect(text).toEqual(result);
          
    }
    
}module.exports=new Web_page();