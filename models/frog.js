const mongoose = require("mongoose")
const frogSchema = mongoose.Schema({
age:{
    type:Number,
    min: 4,
    max: 15},
color: String,
lifeSpan: String
})
module.exports = mongoose.model("Frog",
frogSchema)