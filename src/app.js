const express = require('express');
const app = express();
const path = require("path");
const subscriberModel = require('./models/subscribers');

//middleware to parse JSON request body
app.use(express.json());

const staticPath = path.join(__dirname, "../public");
app.use("/", express.static(staticPath));


app.get("/", (req, res) => {
    res.json("Hi everyone, this is Sunil from Almabetter!");
});

//  Create a new subscriber
app.post("/subscribers", async (req, res) => {
    try {
        const { name, subscribedChannel, subscribedDate } = req.body;

        //  ensure required fields are provided
        if (!name || !subscribedChannel || !subscribedDate) {
            return res.status(400).json({ message: "All fields are required." });
        }

        // Create new subscriber
        const subscriber = await subscriberModel.create({
            name,
            subscribedChannel,
            subscribedDate: subscribedDate ? new Date(subscribedDate) : undefined,
        });

        res.status(201).json({ message: "Subscriber created successfully", subscriber });
    } catch (error) {
        console.error("Error creating subscriber:", error);
        res.status(500).json({ message: "Internal Server Error", error });
    }
});

// fetch all subscribers
app.get("/subscribers", async (req, res) => {
    try {
        const subscribers = await subscriberModel.find().select("-__v");
        res.status(200).json(subscribers);
    } catch (err) {
        res.status(400).json({ error: "Database Error" });
    }
});

// fetch only names of subscribers
app.get("/subscribers/name", async (req, res) => {
    try {
        const subscribers = await subscriberModel.find().select("-__v -_id -subscribedDate");
        res.status(200).json(subscribers);
    } catch (err) {
        res.status(400).json({ error: "Invalid name URL" });
    }
});

// fetch a subscriber by ID
app.get("/subscribers/:id", async (req, res) => {
    try {
        let id = req.params.id;
        let subscriber = await subscriberModel.findById(id).select("-__v");

        if (!subscriber) {
            return res.status(404).json({ message: "Subscriber not found" });
        }

        res.status(200).json(subscriber);
    } catch (err) {
        res.status(400).json({ message: "Invalid ID" });
    }
});

module.exports = app;
