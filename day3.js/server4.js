//                      server4.js( for student Route)


//        
//                       DAY3.JS/
//                         ├── Router/                         :- Folder name
//                         │   └── studentRouter.js
//                         ├── server4.js





    const express = require('express')
    const app = express()

     // Import the studentRouter
     const userRouter = require('./Router/studentRouter')

    // Mount the studentRouter at /student
     app.use('/student',userRouter)





     // Start server

     app.listen(3000,()=>{
        console.log('Server is running at http://localhost:3000');
        
     })