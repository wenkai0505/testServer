const mongoose = require('mongoose')



const pepoleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
})


const Pepole = mongoose.model('Pepole', pepoleSchema)
module.exports = Pepole