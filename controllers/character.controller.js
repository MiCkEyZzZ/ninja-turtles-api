import CharacterService from '../services/character.service.js'
import apiError from '../errors/api.error.js'
import {message} from '../messages/message.js'

class CharacterController {
    async getAllCharacter(req, res, next) {
        try {
            const characters = await CharacterService.getAllCharacter()
            res.status(200).json(characters)
        } catch (error) {
            await next(apiError.internal(message.someWrong))
        }
    }

    async getOneCharacter(req, res, next) {
        try {
            const character = await CharacterService.getOneCharacter(req.params.id)
            res.status(200).json(character)
        } catch (error) {
            await next(apiError.internal(message.someWrong))
        }
     }

    async getCharacterAvatar(req, res, next) {
        try {

        } catch (error) {
            await next(apiError.internal(message.someWrong))
        }
     }
}

export default new CharacterController()