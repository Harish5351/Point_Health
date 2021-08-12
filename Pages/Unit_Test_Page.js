 module.exports =class Unit_Test{

 enternumber1 = (when) =>{
 when(/^I click on number "(.*)"$/, (number) => {
    reporter.startStep("I click on number");
    console.log("step1");
    this.num1 = number;
    console.log(number);
    reporter.endStep();
  
 });
 }

enteroperator = (and) =>
{
 and(/^I click on operator "(.*)"$/, (operator) => {
  reporter.startStep("I click on operator");
  console.log("step2");
  this.op = operator;
  console.log(this.op);
  reporter.endStep()
 });
}

enternumber2 = (and) =>
and(/^I click on number "(.*)"$/, (numbertwo) => {
  reporter.startStep("I click on number");
  console.log("step3");
  this.num2 =numbertwo
  console.log(numbertwo);
  reporter.endStep()
});

getResult = (then) =>
then(/^I see the result as "(.*)"$/, (result) => {
  reporter.startStep("I see the result as "+result);
  console.log("step4");
  if (this.op=="+")
  {
  this.total = parseInt(this.num1) + parseInt(this.num2)
  }
  else if(this.op=="-")
  {
    this.total = this.num1 - this.num2
  }
 
  expect(this.total.toString()).toEqual(result)
  reporter.endStep()
  
});

}

