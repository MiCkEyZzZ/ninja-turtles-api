const {Schema, model} = require('mongoose')
const mongodbErrorHandler = require('mongoose-mongodb-errors')

const locationSchema = new Schema({
    id: Number,
    name: String,
    type: String,
    dimension: String,
    residents: [String],
    url: String,
    created: Date
})

locationSchema.plugin(mongodbErrorHandler)

module.exports = model('Location', locationSchema)