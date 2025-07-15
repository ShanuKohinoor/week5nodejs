//                                       MODULE





//                                   What are Modules?
//                                   -----------------    

// Modules:- Simply javascript file. 
//          * It contains codes- functions,variables or logic, that can use other places in the app by importing this module.


//                                   Types of Modules
//                                   ----------------
 //                         ◦ Core Modules (like fs, path, os)
 //                         ◦ Local Modules (your own files)
 //                         ◦ Third-party Modules (installed via npm)


 // There are 3 types of modules:-
 // 1. Core Modules :- built-in. No need to install.
 //              Eg:- 
 //                fs -> For working with the file system
//                 path -> For handling file and directory paths
//                 os -> For getting OS-related info (like memory, CPU)



 // 2. Local Modules :- Created by ourselves.
 //                 Refer export.js in day2 node.js


 // 3. Third-party Modules :- These are created by others and shared via npm (Node Package Manager). We have to install them first.
//                Eg:-  
//                    First installexpress like:-  npm install express


                const express = require('express'); // importing third-party module

                const app = express();

                // Create a simple GET route
                app.get('/', (req, res) => {
                    res.send('Hello from Express!');
                });

                // Start the server
                app.listen(3000, () => {
                     console.log('Server running at http://localhost:3000');
                });










 
    • Using Modules (Importing & Exporting)
        ◦ Import using require() (CommonJS)
        ◦ Export using module.exports
        ◦ Intro to ES Modules (import, export) – when to use
        ◦ Difference between CommonJS and ES Modules
    • View Engine & Dynamic Rendering
        ◦ What is a View Engine & Why use it in Backend?
        ◦ Popular Options (EJS, Pug, Handlebars)
        ◦ Setting up EJS in Express
        ◦ Passing Data with res.render()
        ◦ Views Folder & .ejs Files
        ◦ Example: Render Profile Page

    • EJS + Tailwind Practice – Product Cards Page
        ◦ Passing Data with res.render()
        ◦ Create a dummy array of products (each with name, price, image).
        ◦ Use EJS to loop through the array and render product cards dynamically.
        ◦ Style the cards using Tailwind CSS in a responsive grid layout.
        ◦ Each card must show the image, name, and price.

