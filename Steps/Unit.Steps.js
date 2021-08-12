const { defineFeature, loadFeature } = require('jest-cucumber');
const Unit_Test_Class = require("../Pages/Unit_Test_Page")
const Unit_obj  = new Unit_Test_Class()

const feature = loadFeature('./Features/Unit_Test.feature',
// {
//   tagFilter: '@demo1 and not @demo2'
// }
);



defineFeature(feature, test => {
   test('[Calculate, Smoke] Verify Addition Operation', ({ when, and, then }) => {
      Unit_obj.enternumber1(when);
      Unit_obj.enteroperator(and);
      Unit_obj.enternumber2(and);
      Unit_obj.getResult(then);
      

    //   beforeEach(()=>
    //   {
    //       console.log("Before every test run")
    //   });

    
    //   afterEach(() => {
    //      console.log("After each")
    //    });
     
    //    beforeAll(() => {
    //      console.log("Before All")
    //    });
       
    //    afterAll(() => {
    //      console.log("After All")
    //    });
     
      });

   test('[Calculate, Smoke] Verify Substraction Operation', ({ when, and, then }) => {
      Unit_obj.enternumber1(when);
      Unit_obj.enteroperator(and);
      Unit_obj.enternumber2(and);
      Unit_obj.getResult(then);
  });
  
});
