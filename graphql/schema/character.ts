import { Field, ID, ObjectType } from 'type-graphql'

import { Episode } from './episode'

@ObjectType()
export class Character {
	@Field((type) => ID)
	id: number

	@Field()
	name: string

	@Field()
	species: string

	@Field()
	type: string

	@Field()
	status: string

	@Field((type) => ID)
	locationId: number

	@Field()
	location: string

	@Field()
	occupation: string

	@Field()
	gender: string

	@Field((type) => [Episode])
	episode: Episode[]

	@Field((type) => [String])
	weapons: string[]

	@Field()
	bandana_color: string

	@Field()
	affiliation: string

	@Field()
	image_cover: string

	@Field()
	url: string

	@Field()
	createdAt: Date
}
