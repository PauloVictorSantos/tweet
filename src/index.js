const express = require('express');
const mongoose = require('mongoose');


const app = express();

mongoose.connect('mongodb://app123:app123@ds155213.mlab.com:55213/appbackend', {
    useNewUrlParser: true
});


app.get('/', (req, res) => {
    return res.send('Hello Word');
});

app.listen(3000, () => {
    console.log('Server started on port 3000, ready');
});

