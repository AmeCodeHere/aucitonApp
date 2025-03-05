const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
const port = 3000

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

        res.status(201).json({ message: "Auction item saved!!" ,itemAmount})

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
    bidAmount: {
        type: Number,
        min: 0
    }

})

const UserBid = mongoose.model("UserBid", amountToBid)

app.post("/bid", async (req, res) => {

    try {
        const { id, bidAmount } = req.body
        const userBid = new UserBid({ id, bidAmount })
        await userBid.save()
        res.status(201).json({ message: "User give a bid for Auction" })
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: "server error during bid!" })
    }

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)

})