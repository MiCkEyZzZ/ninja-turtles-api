import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType()
export class Info {
	@Field((type) => Int)
	count: number;

	@Field((type) => Int)
	pages: number;
}
