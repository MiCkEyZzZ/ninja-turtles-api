import { Field, ObjectType } from 'type-graphql'

import { Location } from './location'
import { Info } from './info'

@ObjectType()
export class Locations {
	@Field((type) => Info)
	info: Info

	@Field((type) => Location)
	data: Location[]
}
