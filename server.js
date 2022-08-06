import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { Words } from "./models/Words.js";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/derdiedas";

mongoose.connect(MONGODB_URI, (err) => {
    if (err) {
        console.log({
            error: "Cannot connect to MongoDB database.",
            err: `"${err}"`,
        });
    }
});

const app = express();
app.use(express.json());

const port = process.env.PORT || 5050;

app.get("/", (req, res) => {
    res.send("<h1>Der Die oder Das</h1>");
});

app.get('/words', async (req, res) => {
    const learningWords = await Words.find();
    res.status(200).json(learningWords);
})

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});
