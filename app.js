const express = require("express");
const userRoutes = require("./routes/userRoute");
const dotenv = require("dotenv");
const connectToDB = require("./config/db");
const app = express();

dotenv.config();
connectToDB();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/user", userRoutes);

app.use("/user", (req,res) => {
    res.render("index");
});



app.listen(3000, () => {
    console.log("Server live on localhost:3000");
});