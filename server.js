//importing packages

const express = require('express');

const mongoose = require('mongoose');

const user = require('./model/model.userCollection');

const collectionRoutes = require('./router/routes.userCollection');
const orderRoutes = require('./router/routes.orderCollection');

//importing environment variable
require('dotenv').config();

let PORT = process.env.PORT || 3330;

const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(collectionRoutes);

app.use(orderRoutes);

mongoose.connect('mongodb+srv://user1:vikash123@employee.j0gzk.mongodb.net/userorder?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }).then((result) => {
    app.listen(PORT, () => {
        console.log('server started');
    })
    console.log('mongoose connected');

}).catch((err) => {
    console.log('mongoose not connected');
    console.log(err);
});
