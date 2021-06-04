const {Schema, model} = require('mongoose')
const {mongodbErrorHandler} = require('mongoose-mongodb-errors')

const personSchema = new Schema({
    id: Number,
    name: String,
    species: String,
    type: String,
    status: String,
    location: {type: Schema.ObjectId, ref: 'Location'},
    series: {type: Schema.ObjectId, ref: 'Series'},
    gender: String,
    image: String,
    url: String,
    created: Date
})

personSchema.plugin(mongodbErrorHandler)

module.exports = model('Person', personSchema)