  //                                MIDDLEWARE
  //                               *----------*



//               It is a function which has access to request,response, and 'next' method.
//                                 *  Middleware is a function that runs between the request and the response.
//                                 * It can:
//                                   - Modify the request or response.
//                                   - Stop the request.
//                                   - Call the next function to continue to the next step.



// we use 'app.use' for this
// if we give a call back function inside app.use, it is middleware.Eg:-
//               app.use(callback function)/ app.use(middleware)
//  Syntax:- 

            //  app.use((req,res,next)=>{
              // console.log("Hit on middleware") 
              //})                                           // mentioned and runned in node.js day2 express.js file. Refer that file
// If any request come to the app, it will execute middleware first(that means it will hit on middleware first). Then only it will go to the other routes.
// if we want to move to api or next middleware must call 'next'.

               // next();          // when we call 'next' only it will go to next middleware or route.



//               Types of Middleware (Built-in, Application-level, Third-party)
//               -------------------------------------------------------------


//  1. Built-in Middleware

//  This provided by Express. No need to install.

//         1.  express.json()	          - Parses incoming JSON requests
//         2.  express.urlencoded()	      - Parses URL-encoded form data (from HTML forms)
//         3.  express.static()	          - Serves static files like HTML, CSS, images


//  2. Application-level Middleware
     

//  We can  write these by using app.use() or app.get(), app.post() etc.

//                      They are used to handle tasks like:
//                            * Logging
//                            * Authorization
//                            * Custom logic


// Eg:-   
                       app.use((req, res, next) => {
                         console.log('This is my custom middleware');
                         next();
                       });



//  3. Third-party Middleware

// These are packages from npm that you install and use.

//  Eg:-   morgan	                - Logs HTTP requests (like GET /, POST /login)
//             install morgan like this ->  npm install morgan 


             //const morgan = require('morgan');
              //app.use(morgan('dev'));  // Automatically logs all requests



                    


//                         Order of Middleware Execution\
//                         -----------------------------


// In express, Middleware runs in the order it written in the code, from top to bottom. 
       // If one middleware ends the request (res.send()), the rest below it will not run.
       // next() decides whether to move forward to the next middleware or not.


// Order:- 
           const express = require('express')
           const app = express()


           //First Middleware
           app.use((req,res,next)=>{
             console.log("Middle ware 1");
             next();                     // moves to next middleware    
           })

           // Second Middleware
              app.use((req,res,next)=>{
                 console.log("Middleware 2");
                 next();                        // moves to next Middleware
              })


           // Route handler

                app.get('/', (req,res)=>{
                  console.log("Route handler");
                  res.send("Hello from Express")
            
                })

                    app.listen(3000,()=>{
                     console.log("Server is running at http://localhost:3000");
            
                    })
                                 // Output will be,
                                             // Middle ware 1
                                             // Middleware 2
                                             // Route handler




// if you dont call next(), like this
         app.use((req, res, next) => {
           console.log('Middleware 2');
           res.send('Stopped here');
         });         
                     // Output will be,
                          // Middle ware 1
                          // Middleware 2
                              // No "Route Handler" will run because the request ended in Middleware 2 with res.send().



//                  Example: Custom Logging Middleware
//                  ----------------------------------

//             Refer custom middleware file









//                   Using express.json() and express.urlencoded()
//                   ---------------------------------------------


//When data is sent to the server, (via form or JSON), Express doesn’t understand the body by default.

//  express.json() and express.urlencoded() help Express to read and extract the data from the body of a request.
// These are the tools to help express to read data sent by a user in a request.


//  Use express.json() - when data is sent in JSON format (like from JavaScript or Postman).

//  Use express.urlencoded() - when data comes from an HTML form (like input boxes on a webpage).
 
// Without these, Express can’t understand or read the user’s data.



//  Eg:- without middleware:-
           const express = require ('express')
           const app = express()

           app.post('/submit',(req,res)=>{
            console.log('Body:', req.body);
            res.send('Data recieved')
            
           })

           app.listen(3000,()=>{
            console.log('Server is listening http://localhost:3000');
            
           })                         //   without these two tools , Output will be :-
                                                   // Body: undefined


//  Eg:- without middleware:-
           const express = require ('express')
           const app = express()

            // Middleware to parse JSON and form data
               app.use(express.json()); // for JSON
               app.use(express.urlencoded({ extended: true })); // for form data



           app.post('/submit',(req,res)=>{
            console.log('Body:', req.body);
            res.send('Data recieved')
            

           })

           app.listen(3000,()=>{
            console.log('Server is listening http://localhost:3000');
            
           })                  

                             // With these two tools, Output will be:-
                             // Body: { name: 'SHANU' }








