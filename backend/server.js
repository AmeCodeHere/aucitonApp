const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const jwt = require("jsonwebtoken")
const app = express()
const port = 3000
require("dotenv").config();

app.use(cors())
app.use(bodyParser.json())

mongoose.connect("mongodb://localhost:27017/auctionApp")
    .then(() => {
        console.log("Mongoose connected")
        console.log("Mongoose Db name: ", mongoose.connection.name)

    })
    .catch((err) => console.error(err))

//user detail for login and signup
const userSchema = new mongoose.Schema({
    id: {
        type: String,
        unique: true,
        require: true
    },
    username: String,
    password: String,
    email: String,

})
const AuctionUser = mongoose.model("AuctionUser", userSchema)

app.post('/save', async (req, res) => {
    const { id, username, password, email } = req.body

    try {
        const newUser = new AuctionUser({ id, username, password, email })
        await newUser.save()

        res.status(201).json({ message: username })

    } catch (err) {

        console.error(err)
        res.status(500).json({ message: "Server Error during signup!!" })

    }
})
//user item for auction
const userItemSchema = new mongoose.Schema({
    id: {
        type: String,
        require: true,
        unique: true
    },
    itemName: String,
    itemAmount: Number
})

const AuctionItem = mongoose.model("AuctionItem", userItemSchema)

app.post('/saveItem', async (req, res) => {
    const { id, itemName, itemAmount } = req.body

    try {

        const auctionItem = new AuctionItem({ id, itemName, itemAmount })
        await auctionItem.save()

        res.status(201).json({ message: "Auction item saved!!", itemAmount })

    } catch (err) {
        console.error("error in saving item ", err)
        res.status(500).json({ message: "Server Error during auction add!!" })
    }
})
// optional : amount bid by the user during auction of an item
const amountToBid = mongoose.Schema({
    id: {
        type: String,
        require: true,
        unique: true
    },
    amount: {
        type: Number,
        min: 0
    }

})

const UserBid = mongoose.model("UserBid", amountToBid)

app.post("/bid", async (req, res) => {

    try {
        const { id, amount } = req.body
        const userBid = new UserBid({ id, amount })
        await userBid.save()
        res.status(201).json({ message: "User give a bid for Auction" })
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: "server error during bid!" })
    }

})

//login request
app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await AuctionUser.findOne({ email: email })


        if (!user || user.password != password) {
            return res.status(401).json({ message: "Invalid Credentials" })
        } else {

            const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: "1h" });
            res.json({ token, user: { name: user.name, email: user.email } });
        }
    } catch (err) {

    }
})

//getRequest 

app.get("/getItems", async (req, res) => {
    try {
        const getItems = await AuctionItem.find()
        res.json(getItems)
        // res.status(201).json({message:"Data fetched!!"})
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: "Server error fetching data" })
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)

})

/////fetching auction itmes in every interval////////////
let currentIndex = 0
app.get('/currentAuction', async (req, res) => {

    try {
        const items = await AuctionItem.find().sort({ _id: 1 })

        if (items.length === 0) {
            return res.status(404).json({ message: "no auction found!!" })
        } else {
            const currentAuction = items[currentIndex];

            res.json(currentAuction)

            // Move to the next auction item after 10 minutes
            setTimeout(() => {
                currentIndex = (currentIndex + 1) % items.length

            }, 10 * 60 * 1000)


        }
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: "Server error fetching auction" });

    }
})