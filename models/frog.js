const mongoose = require("mongoose")
const frogSchema = mongoose.Schema({
age: Number,
color: String,
lifeSpan: String
})
module.exports = mongoose.model("Frog",
frogSchema)