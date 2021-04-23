// VAR ENV
require("dotenv").config();

const express = require("express");
const formidable = require("express-formidable");
const cors = require("cors");
const mailgun = require("mailgun-js");

// MAILGUN

const api_key = process.env.API_KEY;
const domain = process.env.DOMAIN;

console.log(api_key, domain);

const mg = mailgun({ apiKey: api_key, domain: domain });

const app = express();
app.use(formidable());
app.use(cors());

app.post("/form", async (req, res) => {
    try {
        console.log(req.fields);
        const data = {
            from: `${req.fields.firstName} ${req.fields.lastName} <${req.fields.email}>`,
            to: "florianejojo@gmail.com",
            subject: "coucou",
            text: `${req.fields.message}`,
        };

        mg.messages().send(data, function (error, body) {
            console.log("error:", error);
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
