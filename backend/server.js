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
        res.status(500).json({ message: "Server Error !!" })

    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)

}
)