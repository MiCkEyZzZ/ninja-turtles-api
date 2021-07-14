import mongoose from 'mongoose'
import mongodbErrorHandler from 'mongoose-mongodb-errors'

const episodeSchema = new mongoose.Schema({
    id: Number,
    name: String,
    episode: String,
    release: String,
    characters: [String],
    url: String,
    created: Date
})

episodeSchema.plugin(mongodbErrorHandler)

export default mongoose.model('Episode', episodeSchema)