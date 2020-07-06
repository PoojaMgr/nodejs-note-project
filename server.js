const express = require('express');
const bodyParser = require('body-parser');

//Configuring the database 
const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;



//create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

//parse requests of content-type-application/json
app.use(bodyParser.json());

//Connecting the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to database")
}).catch(err => {
    console.log('Could not connect to database', err);
    process.exit();
})

app.get('/', (req, res) => {
    res.json({"message": "I am okay"})
});

require('./app/routes/note.route')(app);

app.listen(3000, () =>{
    console.log("Server is listening on port 3000")
})