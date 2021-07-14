import mongoose from 'mongoose'
import mongodbErrorHandler from 'mongoose-mongodb-errors'

const characterSchema = new mongoose.Schema({
    id: Number,
    name: String,
    species: String,
    type: String,
    status: String,
    location: {type: mongoose.Schema.ObjectId, ref: 'Location'},
    origin: {type: mongoose.Schema.ObjectId, ref: 'Location'},
    gender: String,
    episode: [String],
    image: String,
    url: String,
    created: Date
})

characterSchema.plugin(mongodbErrorHandler)

export default mongoose.model('Character', characterSchema)