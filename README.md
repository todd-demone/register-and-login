# Registration and Login App

## Installation and startup on a local machine

1. Install MongoDB - If you don't have MongoDB, you can install it using [these instructions](https://www.mongodb.com/docs/manual/administration/install-community/).
2. Start MongoDB - The [installation instructions](https://www.mongodb.com/docs/manual/administration/) provide start and stop commands, which differ depending on the operating system being used.
3. Install API libraries - From the `api` directory run `npm install`.
4. Start the Express server - From the `api` directory run `node server.js`. The server will begin listening for HTTP requests on port 8080.
5. Install frontend libraries - From the `ui` directory run `npm install`.
6. Start the React app - From the `ui` directory run `npm start`. The frontend can be viewed [here](http://localhost:3000).
7. Try the [Sign Up](http://localhost:3000/signup) and [Sign In](http://localhost:3000/signin) pages.
8. Try to view the [Protected Resource](http://localhost:3000/protected-resource) page, both as a logged-in user and when not logged in.

## Tech stack

### API:

- ExpressJS
- MongoDB
- Mongoose
- jsonwebtoken
- bcrypt

### Frontend:

- React
- TypeScript
- React Router
- axios
- react-hook-form
- yup
- MUI
