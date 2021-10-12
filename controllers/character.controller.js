const CharacterService = require('../services/character.service')
const ApiError = require('../utils/api.error.js')

class CharacterController {
    async getAllCharacter(req, res, next) {
        try {
            const characters = await CharacterService.getAllCharacter()

            res.status(200).json({
                status: 'success',
                results: characters.length,
                data: {
                    characters
                }
            })
        } catch (err) {
            next(err)
        }
    }

    async getOneCharacter(req, res, next) {
        try {
            const { id } = req.params
            const character = await CharacterService.getOneCharacter(id)

            if (!character) {
                return next(new ApiError(`Character with this ID ${ character.id } not found`, 404))
            }

            res.status(200).json({
                status: 'success',
                data: {
                    character
                }
            })
        } catch (err) {
            next(err)
        }
     }

    async getCharacterAvatar(req, res, next) {
        try {

        } catch (error) {
            await next(apiError.internal(message.someWrong))
        }
     }
}

module.exports = new CharacterController()
