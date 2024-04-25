const express = require('express');

const mongoose = require('mongoose');

const cors = require('cors');

const dotenv = require('dotenv').config();

const Model = require('./Model.js');

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);




const app = express();

app.use(cors());
app.use(express.json())

app.use(express.static(path.join(__dirname, '/client/dist')))

app.get('*', (req, res)=> res.sendFile(__dirname, '/client/dist/index.html'))

port = process.env.PORT

mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch((err) => {
        console.error("Error connecting to the database:", err);
    });


    app.post('/send', async (req, res) => {
        try {
            const { name, email, subject, message } = req.body;
            if (!name || !email || !subject || !message) {
                return res.status(400).json({ error: "All fields are required" });
            } else {
                const user = await Model.create({ name, email, subject, message });
                return res.status(200).json({ msg: "message sent"});
            }
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    });

app.listen(port, (req, res) => {
    console.log(`Server is running on PORT ${port}`)
})