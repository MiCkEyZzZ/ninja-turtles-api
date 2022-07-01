import { Field, ObjectType } from 'type-graphql';

import { Episode } from './episode';
import { Info } from './info';

@ObjectType()
export class Episodes {
	@Field((type) => Info)
	info: Info;

	@Field((type) => Episode)
	data: Episode[];
}
