nconf = require('nconf');
nconf.file({ file: './Resources/config.json' });

class BasePage
{
   

    async initialize_AppDriver ()
    {  
 
    console.log("initializing")
      
    this.wd=require("selenium-webdriver"),
    this.By=this.wd.By,
    this.until = this.wd.until;
    let ExecutionMode = String(nconf.get('App:ExecutionMode'))
    console.log(ExecutionMode)
    if (ExecutionMode=="Cloud")
    {
        var desiredCapability = 
        {
        "os_version" : nconf.get('App:os_version'),
        "device" : nconf.get('App:device'),
        "app" : nconf.get('App:app_url'),
        "build" :nconf.get('App:build'),
        "name" :nconf.get('App:name'),
        "browserstack.appium_version" : nconf.get('App:browserstack.appium_version'),
        "browserstack.user" : nconf.get('App:browserstack.user'),
        "browserstack.key" : nconf.get('App:browserstack.key'),
        "browserstack.gpsLocation":"30.228232279048697,-97.8251031059081"
               
        } 
        
        this.app_driver = await (new this.wd.Builder().usingServer("http://hub-cloud.browserstack.com/wd/hub").withCapabilities(desiredCapability).build());
    }
    else if(ExecutionMode=="Emulator")
    {
        console.log("Emulator settings")
        
            desired_capabilities={
                "platformName": nconf.get('App:platformName'),
                "deviceName": nconf.get('App:Emulator_deviceName'),
                "app": nconf.get('App:Emulator_app'),
                "appPackage": nconf.get('App:appPackage'),
                "appActivity": nconf.get('App:appActivity'),
                "language": "English"
                }

        this.app_driver = await (new this.wd.Builder().usingServer("http://localhost:4723/wd/hub").withCapabilities(desired_capabilities).build());       

    }
    else if(ExecutionMode=="Real Device")
    {
       
            var desired_capabilities={
                "platformName": nconf.get('App:platformName'),
                "build": nconf.get('App:realdevice_build'),
                "deviceName": nconf.get('App:realdevice_deviceName'),
                "os_version": nconf.get('App:realdevice_os_version'),
                "appPackage": nconf.get('App:appPackage'),
                "appActivity": nconf.get('App:appActivity'),
                "noReset": nconf.get('App:realdevice_noReset'),
                "newCommandTimeout": nconf.get('App:realdevice_newCommandTimeout'),
                "automationName": nconf.get('App:automationName'),
                "language": "English"
            }
        

            this.app_driver = await (new this.wd.Builder().usingServer("http://localhost:4723/wd/hub").withCapabilities(desired_capabilities).build());

    }
    console.log("app driver inintialized")
    }

    async initialize_WebDriver ()
    {  
    this.wd=require("selenium-webdriver"),
    this.By=this.wd.By,
    this.until = this.wd.until;
    let ExecutionMode = String(nconf.get('Web:ExecutionMode'))
    console.log(ExecutionMode)
    if (ExecutionMode=="Cloud")
    {
    var desiredCapability = 
    {
        "browserName": nconf.get('Web:browserName'),
        "name": nconf.get('Web:name'),
        "build": nconf.get('Web:build'),
        "browserstack.debug": nconf.get('Web:browserstack.debug'),
        "browserstack.user" : nconf.get('Web:browserstack.user'),
        "browserstack.key" : nconf.get('Web:browserstack.key'),
        "autoGrantPermissions":true
    } 
    this.web_driver = await (new this.wd.Builder().usingServer("http://hub-cloud.browserstack.com/wd/hub").withCapabilities(desiredCapability).build());
    }
    else if(ExecutionMode=="Local")
    {
        console.log("local settings") 
    }
    console.log("web driver inintialized")
    }
    
    close_AppDriver()
    {
        console.log("Closing....")
        this.app_driver.quit()
        console.log("Closed driver")
    }
     

    close_WebDriver()
    {
        console.log("Closing....")
        this.web_driver.quit()
        console.log("Closed driver")
    }
}module.exports=new BasePage();