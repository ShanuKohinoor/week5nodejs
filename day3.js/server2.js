 //                 server2.js(Express server)           --> form frontend.html


//        * Files are in this format:-
     
//                               DAY3.JS/
//                                  ├── form/
//                                  │   └── frontend.html     :- HTML form (without JavaScript)
//                                  ├── server2.js               :- Express server to handle POST


//   Refer frontend.html file inside 'form' named folder

const express = require('express');
const app = express();

const cors = require('cors');

app.use(cors());
app.use(express.urlencoded({extended:true}))     // if we wont give this, will get undefined


app.post('/login',(req,res)=>{
    console.log(req.body);
    res.send(`Hello ${req.body.userName}, login successfully`)
    
})


app.listen(3000,()=>{
    console.log('Server run at http://localhost:3000');
    
})