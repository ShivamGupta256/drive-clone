const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Server created");
})

app.listen(3000, () => {
    console.log("Server live on localhost:3000");
});