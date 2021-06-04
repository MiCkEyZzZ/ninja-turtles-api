const {Schema, model} = require('mongoose')
const mongodbErrorHandler = require('mongoose-mongodb-errors')

const seriesSchema = new Schema({
    id: Number,
    name: String,
    series: String,
    release: String,
    persons: [String],
    url: String,
    created: Date
})

seriesSchema.plugin(mongodbErrorHandler)

module.exports = model('Series', seriesSchema)