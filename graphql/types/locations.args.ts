import { ArgsType, Field, InputType } from 'type-graphql';

@InputType()
export class LocationInput {
	@Field()
	name: string;

	@Field()
	type: string;

	@Field()
	dimension: string;
}

@ArgsType()
export class LocationsArgs {
	@Field((type) => LocationInput)
	filter: LocationInput;

	@Field()
	page: number;
}
