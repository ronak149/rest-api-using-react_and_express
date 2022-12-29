const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const port = process.env.PORT || 5001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api", (req,res) => {
    res.json({ "message": "Hello"});
});

app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.get("/", (req, res) => {
    res.status(200).send("@ backend");
});

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});

module.exports = app;