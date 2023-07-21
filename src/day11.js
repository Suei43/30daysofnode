"use strict";
//INTRODUCTION TO EXPRESS
let express = require('express');
let app = express();
let port = 3000;
app.get('/', (req, res) => {
    if (req.body)
        console.log(req.body);
    res.status(200).send("This route works!");
});
app.get('/hello', (req, res) => {
    res.status(200).send("This is the hello route!");
});
app.listen(port, () => {
    console.log("Currently listening on port:", port);
});
