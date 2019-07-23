require('dotenv').config({ path: 'variables.env' });

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

mongoose.set('debug', true);
// connect to database
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });
mongoose.Promise = Promise;

app.use(cors({ origin: '*' }));

const postRoutes = require('./routes/posts');
const categoryRoutes = require('./routes/categories');
const neighborhoodRoutes = require('./routes/neighborhoods');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.send("Hello from the root route");
})

app.use('/api/posts', postRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/neighborhoods', neighborhoodRoutes);

app.listen(7777, function () {
    console.log("~ Staring the server ~");
})
