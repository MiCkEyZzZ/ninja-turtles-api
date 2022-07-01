import { Field, ID, ObjectType } from 'type-graphql';

import { Character } from './character';

@ObjectType()
export class Episode {
	@Field((type) => ID)
	id: number;

	@Field()
	name: string;

	@Field()
	episode: string;

	@Field((type) => [String])
	producers: string[];

	@Field()
	season: string;

	@Field()
	air_date: string;

	@Field((type) => [Character])
	characters: Character[];

	@Field()
	image_cover: string;

	@Field()
	url: string;

	@Field()
	createdAt: Date;
}
