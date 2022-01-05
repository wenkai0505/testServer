const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Pepole = require('./models/pepole')
let port = process.env.PORT || 8080



mongoose
    .connect('mongodb+srv://admin:password123456@cluster0.izj4o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then(() => {
        console.log('connect to mongodb successfully')
    })
    .catch((err) => {
        console.log(err)
    })



app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    res.send('hello ryan lee')
})

app.post('/api/pepole', (req, res) => {
    let { name, email, phone, age } = req.body

    const newPepole = new Pepole({
        name: name,
        email: email,
        phone: phone,
        age: age
    })


    newPepole.save()
        .then(() => {
            res.status(200).send('database saved successfully')
        })
        .catch((err) => {
            res.status(400).send(err.message)
        })

})



app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})










