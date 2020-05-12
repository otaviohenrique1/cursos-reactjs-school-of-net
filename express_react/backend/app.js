import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import mongoose from "mongoose";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(helmet());

mongoose.connect('mongodb://localhost:27017/express_react', { useMongoClient: true });

app.listen(9000, () => {
    console.log('express server started...');
})