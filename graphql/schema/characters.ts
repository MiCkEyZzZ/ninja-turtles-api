import { Field, ObjectType } from 'type-graphql'

import { Character } from './character'
import { Info } from './info'

@ObjectType()
export class Characters {
	@Field((type) => Info)
	info: Info

	@Field((type) => Character)
	data: Character[]
}
