const request = require('superagent')
class api{

     fetchPost = async (docString) => {
     
      
        return  request.post(`https://reqres.in/api/users`).send(JSON.parse(docString)) 
       }


       fetchGet = async() =>{
         return request.get(`https://reqres.in/api/users/2`)
     
       }
    

}

module.exports = new api();