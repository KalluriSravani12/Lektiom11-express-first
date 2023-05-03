// Import database driver
const dbDriver = require('better-sqlite3');

// Connect to db
const db = dbDriver('bands.sqlite3');

//Import express
const express = require('express');
4//Create express app

const app = express();

//configure express

app.use(express.static('frontend')); // Seerve frond end
app.use(express.json());//Use json

/*Building the REST API*/

//Get all
app.get('/bands',(req,res) => {
    //Query all bands
    const bands = db.prepare('SELECT * FROM bands').all();
    //Return bands in JSON
    res.json(bands);


});

//Get one
app.get ('/bands/:id',(req,res)=>{
    // Get single band from url parameter
    const band = db.prepare('SELECT *FROM bands WHERE id = ?').get(req.params.id);
    //Return json or error
    res.json(band || {error: 'No such band'});
});

/* Start the app*/
app.listen(3000, () => {console.log('Serevr started an port 3000')});