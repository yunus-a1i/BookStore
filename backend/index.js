import express, { response } from "express";
import {mongoDBURL, PORT} from "./config.js";
import mongoose from "mongoose";
import booksRoute from './routes/booksRoute.js'
import cors from 'cors';
const app = express();
// const cors = require('cors');


// middleware
app.use(express.json());

// option 1: Allow Origins with Default of cors(*)
app.use(cors());

// option 2: Allow custom origin
// app.use(
//     cors({
//         origin: 'http://localhost:3000',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type'],
//     })
// )

app.get('/', (req, res) => {
    console.log(req);
    res.status(200).send('Home page')
})

app.use('/books', booksRoute);

app.listen(PORT, (req, res) => {
    console.log(`App is running on port ${PORT}`)
})

// 9eY2sfM9B61AvM8r

mongoose
.connect(mongoDBURL)
.then(()=>{
    console.log('App connected to database');
})
.catch((error) => {
    console.log(error);
});

