# INFO30005-2019-DV

Function:       1 - Login
Description:    Allows user to perform login to and logout of the website, along with session cookie to maintain the 
                login session through third-party middleware passport.js.
Files:          index.html (default homepage before login)
                page-login.html (page with login form)
                index-login.html (homepage after login)
                controller_user.js
                schema.js
                route_user.js
                app.js
                

Function:       2 - Retrieve Places and Accessibility Information
Description:    Allows user to enter text search for places via Google Map API, and if a place selected from map
                matches a place with accessibility information stored in our MongoDB, the type of accessibility
                along with place details will be displayed on the upper right corner. User can also select all places
                currently stored in MongoDB with specific accessibility feature by using the checkboxes (filter) just 
                below the Search box.
Files:          GetAccPlaces.html
                controller_places.js
                schema.js
                routes_places.js
                app.js
                
Function:      3 - Comment Management 
Description:   Allow logged users to make comments on places on the map, so that all users can see the comments about the                places. A user can see his own comments in his profile, and he can delete any of his comments if he wants.
Files:         index-login.html 
               controller_comment.js
               route_comment.js 
               app.js 
               schema.js 
                

