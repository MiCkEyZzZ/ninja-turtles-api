const { Schema, model } = require('mongoose')

const mongodbErrorHandler = require('mongoose-mongodb-errors')

const { collection } = require('../utils/common')

const episodeSchema = new Schema({
    id: Number,
    name: String,
    episode: String,
    release: String,
    characters: [String],
    url: String,
    created: {
        type: Date,
        default: Date.now
    }
})

episodeSchema.statics.structure = (res) => {
    const sortSchema = ({ id, name, release, episode, character, url, created }) => ({
        id, name, release, episode, character, url, created
    })

    return Array.isArray(res) ? res.map(sortSchema) : sortSchema(res)
}

episodeSchema.statics.findAndCount = async function ({ name, episode, skip }) {
    const q = key => new RegExp(key && key.replace(/[^\w\s]/g, '\\$&'), 'i')

    const query = {
        name: q(name),
        episode: q(episode)
    }

    const [data, count] = await Promise.all([
        this.find(query).sort({ id: 1 }).select(collection.exclude).limit(collection.limit).skip(skip),
        this.find(query).countDocuments()
    ])

    const results = this.structure(data)

    return { results, count }
}

episodeSchema.plugin(mongodbErrorHandler)

module.exports = model('Episode', episodeSchema)
