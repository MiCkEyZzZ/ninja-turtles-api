import CharacterService from '../services/character.service'
import operationsFactory from '../handlers/operations'

/**
 * Класс CharacterController является контроллером для управления
 * @class - класс CharacterController
 * Метод getAllCharacters
 * @method getAllCharacters
 * Метод getCharacter
 * @method getCharacter
 */

export const getAllCharacters = operationsFactory.getAll(CharacterService)

export const getCharacter = operationsFactory.getOne(CharacterService)

export const createCharacter = operationsFactory.createOne(CharacterService)
