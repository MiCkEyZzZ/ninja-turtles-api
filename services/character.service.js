const Character = require('../models/character.model')

class CharacterService {
    async getAllCharacter() {
        const characters = await Character.find()

        return characters
    }

    async getOneCharacter(id) {
        if (!id) {
            throw new Error('не указан id')
        }

        const character = await Character.findById(id)

        return character
    }
}

module.exports = new CharacterService()
