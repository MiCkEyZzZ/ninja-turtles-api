import { Field, ID, ObjectType } from 'type-graphql';

import { Character } from './character';

@ObjectType()
export class Location {
	@Field((type) => ID)
	id: number;

	@Field()
	name: string;

	@Field()
	type: string;

	@Field()
	dimension: string;

	@Field((type) => [Character])
	residents: Character[];

	@Field()
	url: string;

	@Field((type) => [String])
	image_cover: string;

	@Field((type) => [String])
	images: string[];

	@Field()
	createdAt: Date;
}
