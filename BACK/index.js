// VAR ENV
require("dotenv").config();

const express = require("express");
const formidable = require("express-formidable");
const cors = require("cors");
const mailgun = require("mailgun-js");

// MAILGUN

const mg = mailgun({ apiKey: process.env.API_KEY, domain: process.env.DOMAIN });

const app = express();
app.use(formidable());
app.use(cors());

app.post("/form", async (req, res) => {
    try {
        const data = {
            from: `${req.fields.firstName} ${req.fields.lastName} <${req.fields.email}>`,
            to: "flo.le@icloud.com",
            subject: "coucou",
            text: `${req.fields.message}`,
        };

        mg.messages().send(data, function (error, body) {
            console.log(body);
        });

        res.status(200).json("Merci");
    } catch (error) {
        res.status(400).json(error.message);
    }
});

app.all("*", (req, res) => {
    res.status(400).json("bad gateway");
});

app.listen(3000, () => {
    console.log("server started");
});
