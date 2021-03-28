import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'

import userRoutes from './routes/UserRouter.js';

const app = express();
dotenv.config();

//Setup database
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true});
const database = mongoose.connection;
database.once('open', () => console.log("Database initiated"));

//Only json should be used
app.use(express.json());


app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});



//Routing
app.use('/user', userRoutes);

//Initiate express server
app.listen(process.env.PORT, () => console.log("Backend Server running on port", process.env.PORT));