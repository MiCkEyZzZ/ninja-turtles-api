import { ArgsType, Field, InputType } from 'type-graphql'

@InputType()
export class CharacterInput {
	@Field()
	name: string

	@Field()
	status: string

	@Field()
	species: string

	@Field()
	type: string

	@Field()
	gender: string

	@Field()
	occupation: string
}

@ArgsType()
export class CharactersArgs {
	@Field((type) => CharacterInput)
	filter: CharacterInput

	@Field()
	page: number
}
