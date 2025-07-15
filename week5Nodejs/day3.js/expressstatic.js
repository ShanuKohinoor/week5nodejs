//                        Using express.static() to Serve Static Files
//                        --------------------------------------------


//  It allows  to serve static files like HTML, CSS, images, or JavaScript from a public folder to the browser.

                   const express = require('express');
                   const app = express();

                    // Serve static files from the 'public' folder
                    app.use(express.static('public'));

                     app.listen(3000, () => {
                          console.log('Server is running at http://localhost:3000');
                     });




 //                    URL                                 What It Shows  

 //       `http://localhost:3000/index.html`                 HTML file 
 //       `http://localhost:3000/style.css`                  CSS file  
 //       `http://localhost:3000/logo.png`                   image     




 

 // Serve static files in Express by setting up a public folder and using express.static() to access HTML, CSS, and JS files.
 // -------------------------------------------------------------------------------------------------------------------------
