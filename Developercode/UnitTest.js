class unit{



 fetchUser1 = async (numbers) => {
      
   if(typeof(numbers)== 'number')
   {

    
       if(toString(numbers).length > 1 && numbers >0)
       {
           if(numbers==4)
           {
             return "correct number"
           }
           else
           {
            return "enter correct number"
           }
    
       }
       else
       {
        return  "cant enter this number"
       
       }
       
       
   }
   
  
   else if (typeof(numbers)== 'string') {
    return 'cant enter string'
  }

  else if (typeof(numbers)== 'boolean') {
    return 'this number is boolean'
  }
  


   else 
   {
    return `Error`
   }
   
   }
   
}
module.exports = new unit();