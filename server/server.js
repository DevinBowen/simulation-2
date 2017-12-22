const bodyParser = require('body-parser')
    ,express = require('express')
    ,session = require('express-session')
    ,controller = require('./controller')
    ,cors = require('cors')
    ,massive = require('massive');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use( cors() );
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}));




const port = process.env.PORT
massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
app.listen(port, console.log(`this server is running on port ${port}.`))
})