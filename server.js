// server.js
// SERVER-SIDE JAVASCRIPT

// require express
const express = require('express');
// create a new express object
const app = express();

// Allow CORS: we'll use this today to reduce security so we can more easily test our code in the browser.
/*
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
//*/

// root endpoint and return 'Hello World'
app.get('/', (req, res) => res.send('Hello World!'));

// listen at port #3000
app.listen(process.env.PORT || 3000,  () => console.log('Example app listening at http://localhost:3000/'));

// define album objects
const albums = [
    {
      title: 'Cupid Deluxe',
      artist: 'Blood Orange'
    },
    {
      title: 'M3LL155X - EP',
      artist: 'FKA twigs'
    },
    {
      title: 'Fake History',
      artist: 'letlive.'
    }
];

app.get('/api/albums',(req,res)=> res.json(albums));