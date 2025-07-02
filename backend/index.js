require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");


const { HoldingsModel } = require('./model/HoldingsModel');
const { PositionsModel } = require('./model/PositionsModel');
const { OrdersModel } = require('./model/OrdersModel'); 


const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());


app.get('/allHoldings', async(req, res) => {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
});
app.get('/allPositions', async(req, res) => {
    let allPositions= await PositionsModel.find({});
    res.json(allPositions);
});
app.post("/newOrder", async (req, res) => {
   
        let newOrder = new OrdersModel({
            name: req.body.name,
            qty: req.body.qty,
            price: req.body.price,
            mode: req.body.mode,
        });

        newOrder.save();
        res.send("Order saved!");
    } );
    app.post("/api/auth/signup", async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    res.json({ token: "mock-token-12345" });
});
app.post("/api/auth/login", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }
    res.json({ token: "mock-login-token" });

});



app.listen(PORT, () => {
    console.log("App started!");
    mongoose.connect(uri);
    console.log("DB connected!");
});