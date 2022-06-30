import { Query, Resolver, Mutation, Arg, Args } from 'type-graphql'
import { Character } from '../schema/character'
import { Characters } from '../schema/characters'
import { CharacterService } from '../services/character.service'
import { CharactersArgs } from '../types/characters.args'

@Resolver(Character)
export class CharacterResolver {
	constructor(private characterService: CharacterService) {}

	@Query((returns) => Characters)
	async characters(@Args() { filter, page }: CharactersArgs): Promise<Character[]> {
		return this.characterService.getCharacters()
	}

	@Query((returns) => Character)
	async charactersByIds(@Arg('ids') ids: number[]): Promise<Character[]> {
		return this.characterService.getSingleByIds(ids)
	}

	@Query((returns) => Character)
	async character(@Arg('id') id: number): Promise<Character> {
		return this.characterService.getSingle(id)
	}
}
