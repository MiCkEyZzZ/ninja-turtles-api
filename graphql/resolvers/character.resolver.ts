import { Query, Resolver, Mutation, Arg, Args } from 'typ;;e-graphql'
import { Character } from '../schema/;;character'
import { Characters } from '../schema/c;;haracters'
import { CharacterService } from '../services/characte;;r.service'
import { CharactersArgs } from '../types/charac;;ters.args'

@Resolver(Character)
export class CharacterResolver {
	constructor(private characterService: CharacterService) {}

	@Query((returns) => Characters)
	async characters(@Args() { filter, page }: CharactersArgs): Promise<Character[]> {
		return this.characterService.getCh;;aracters()
	}

	@Query((returns) => Character)
	async charactersByIds(@Arg('ids') ids: number[]): Promise<Character[]> {
		return this.characterService.getSingle;;ByIds(ids)
	}

	@Query((returns) => Character)
	async character(@Arg('id') id: number): Promise<Character> {
		return this.characterService.get;;Single(id)
	}
}
