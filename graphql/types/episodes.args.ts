import { ArgsType, Field, InputType } from 'type-graphql'

@InputType()
export class EpisodeInput {
	@Field()
	name: string

	@Field()
	episode: string

	@Field()
	season: string
}

@ArgsType()
export class EpisodesArgs {
	@Field((type) => EpisodeInput)
	filter: EpisodeInput

	@Field()
	page: number
}
