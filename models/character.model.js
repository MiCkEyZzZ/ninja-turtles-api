const { Schema, Types, model } = require('mongoose')

const mongodbErrorHandler = require('mongoose-mongodb-errors')

const { collection } = require('../utils/common')

const characterSchema = new Schema({
    name: {
        type: String
    },
    species: String,
    type: String,
    status: String,
    location: {
        type: Types.ObjectId,
        ref: 'Location'
    },
    origin: {
        type: Types.ObjectId,
        ref: 'Location'
    },
    gender: String,
    episode: [String],
    image: {
        type: String
    },
    url: String,
    created: {
        type: Date,
        default: Date.now
    }
})

characterSchema.statics.structure = (res) => {
    const sortSchema = ({ id, name, status, species, type, gender, origin, location, image, episode, url, created }) => ({
        id, name, status, species, type, gender, origin, location, image, episode, url, created
    })

    return Array.isArray(res) ? res.map(sortSchema) : sortSchema(res)
}

characterSchema.statics.findAndCount = async function ({ name, type, status, species, gender, skip }) {
    const q = key => new RegExp(key && (/^male/i.test(key) ? `^${key}` : key.replace(/[^\w\s]/g, '\\$&')), 'i')

    const query = {
        name: q(name),
        type: q(type),
        status: q(status),
        species: q(species),
        gender: q(gender),
        skip: q(skip)
    }

    const [data, count] = await Promise.all([
        this.find(query).sort({ id: 1 }).select(collection.exclude).limit(collection.limit).skip(skip),
        this.find(query).countDocuments()
    ])

    const results = this.structure(data)

    return { results, count }
}

characterSchema.plugin(mongodbErrorHandler)

module.exports = model('Character', characterSchema)
