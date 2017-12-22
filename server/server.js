const bodyParser = require('body-parser')
    ,express = require('express')
    ,session = require('express-session')
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}));




const port = process.env.PORT
app.listen(port, console.log(`this server is running on port ${port}.`))