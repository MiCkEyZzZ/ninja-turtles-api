import mongoose from 'mongoose'
import mongodbErrorHandler from 'mongoose-mongodb-errors'

const locationSchema = new mongoose.Schema({
    id: Number,
    name: String,
    type: String,
    dimension: String,
    residents: [String],
    url: String,
    created: Date
})

locationSchema.plugin(mongodbErrorHandler)

export default mongoose.model('Location', locationSchema)