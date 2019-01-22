const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
    res.json("connected");
})


const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
    console.log("Server is running");
})