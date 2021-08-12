const setJestCucumberConfiguration = require('jest-cucumber').setJestCucumberConfiguration;
nconf = require('nconf');
nconf.file({ file: './Resources/config.json' });
base_obj =require('./Pages/Base_Page');
require('dotenv').config()

setJestCucumberConfiguration({
  //tagFilter: '@demo1 and not @demo2'   //execute only demo1 & not demo2
  //tagFilter: '@demo1 and @demo2'       //execute if both tags are present
  //tagFilter: '@demo1 or @demo2'
  
  
});
  
jest.setTimeout(500000);
global.app= (process.env.app_flag)
console.log("Value: "+String(global.app))
global.web=(process.env.web_flag)
console.log(global.web)
beforeAll(()=> {
  console.log("Before All")
});

afterAll(() => {
  console.log("After All")
});

beforeEach ( async()=>
{
  if (global.app=="TRUE")
  {
  console.log("Before Each for app")
  console.log("Calling initialize app driver")
  await base_obj.initialize_AppDriver()
  global.driver=base_obj.app_driver;
  global.By = base_obj.By;
  global.until=base_obj.until;

  }
  if (global.web =="TRUE")
  {
  console.log("Before Each for web")
  console.log("Calling initialize web driver")
  await base_obj.initialize_WebDriver()
  global.driver=base_obj.web_driver;
  global.By = base_obj.By;
  global.until=base_obj.until;
  }
  console.log("Before Each common")
    
})

afterEach(() => {
    console.log("After each")
    if (global.app =="TRUE")
  {
    base_obj.close_AppDriver();

  }
  if (global.web =="TRUE")
  {
    base_obj.close_WebDriver();
  }
    
  });
