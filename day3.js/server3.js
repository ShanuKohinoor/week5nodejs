//                      server3.js(Express server)










//      Refer formdata.html file inside 'form' named folder



  const express = require('express')
  const app = express()

  const cors = require('cors')


  app.use(cors());
  app.use(express.urlencoded({extended:true}))


app.post('/login',(req,res)=>{
    console.log(req.body)
    res.send(`Hello ${req.body.userName},your password is ${req.body.password}`)  //  we can write like this also...Two types'
                                                                                     // option  1:- const { username, password } = req.body                            
                                                                                           // res.send(`Hello ${username}`);
      
                                                                        
                                                                                    //option 2:- const username = req.body.username;
                                                                                        // const password = req.body.password; 
                                                                                        // res.send(`Hello ${username}`);

 
})


app.listen(3001,()=>{
    console.log('Server is running http://localhost:30001');
    
})