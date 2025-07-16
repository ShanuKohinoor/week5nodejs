//                                Router for student

// This is the router that handles all /student routes



//        
//                       DAY3.JS/
//                         ├── Router/                         :- Folder name
//                         │   └── studentRouter.js
//                         ├── server4.js

console.log("✅ studentRouter.js loaded");


   const express = require('express')
   const router = express.Router()


   router.get('/',(req,res)=>{
    console.log('user routes');
    res.send('Student route is working')
    
   })

   module.exports = router

