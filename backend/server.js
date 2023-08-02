const express = require("express");
const app = express();

require("dotenv").config();

let dbconnect = require('./dbConnect')

app.use(express.json());

app.get("/", (req, res) => {
    res.json({message: "Welcome to Plant Assist"});
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});