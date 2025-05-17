const express = require("express");
const router = express.Router();
const { body, validationResult } = require('express-validator'); // express-validator not used. Relying on hmtl for validating.
const userModel = require("../models/userSchema");

router.get("/register", (req,res) => {
    res.render("register");
})

router.post("/register", async (req,res) => {

    const {username, email, password} = req.body;

    const newUser = await userModel.create({
        username,
        email,
        password
    });

    res.json(newUser);

});

module.exports = router;