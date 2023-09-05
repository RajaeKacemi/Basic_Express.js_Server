const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res, next) => {
    res.send("Welcome to my Express.js server!");
});

app.listen(port, () => {
    console.log('Server Started , Port ', port);
})