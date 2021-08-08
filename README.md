# Welcome to Bookz Readme

Bookz is an app where your books won't sleep on the shelf. 
You can track the books you have read so far and add new ones to your shelf! You can also find a specific book, edit or delete any book in the database.

## New technologies practised through the project

### Node.js & Express

This project has been built using [Node.js](https://nodejs.org/en/about/) and the [Express](https://expressjs.com/) framework.

![express setup](https://imgur.com/lCQ1aB1)

You can find it here in the project: [API/app.js](API/app.js)
The API calls were tested with Postman to make sure the paths were correct to access the database.

### MongoDB

The database is managed using MongoDB. I've used the Studio 3T app to setup and create the database.

![mongodb setup](https://imgur.com/TP0lf0a)
![studio 3t](https://imgur.com/ISr75Y4)

You can find it here in the project: [API/controller.js](API/controller.js)

### Bootstrap

To help with the formatting on the frontend, I have decided to use Bootstrap.
This was particularly helpful with formatting the table with all the books on the bookshelf so far and made it more readable quickly.
It felt like magic!

![bookshelf](https://imgur.com/6FPNnNu)

Importing bootstrap: [React/bookz/src/App.js](React/bookz/src/App.js)
The buttons have been formatted using bootstrap: [React/bookz/src/components/button/index.js](React/bookz/src/components/button/index.js)
The table formatted using bootstrap: [React/bookz/src/components/bookshelf/index.js](React/bookz/src/components/bookshelf/index.js)

#### Other
Nodemon: for the building environment. Automatic rerender of the backend app whenever a change was made.

CORS: Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading of resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request. [Source](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)


## Diagram that shows how the technology works

![diagram](https://imgur.com/jnZ1HF1)
[Source](https://www.mongodb.com/blog/post/the-modern-application-stack-part-5-using-reactjs-es6-and-jsx-to-build-a-ui-the-rise-of-mern)
