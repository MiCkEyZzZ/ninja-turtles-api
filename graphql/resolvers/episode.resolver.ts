import { Query, Resolver, Mutation, Arg, Args } from 'type-graphql'
import { Episode } from '../schema/episode'
import { Episodes } from '../schema/episodes'
import { EpisodeService } from '../services/episode.service'
import { EpisodesArgs } from '../types/episodes.args'

@Resolver(Episode)
export class EpisodeResolver {
	constructor(private episodeService: EpisodeService) {}

	@Query((returns) => Episodes)
	async episodes(@Args() { filter, page }: EpisodesArgs): Promise<Episode[]> {
		return this.episodeService.getEpisodes()
	}

	@Query((returns) => Episode)
	async episodesByIds(@Arg('ids') ids: number[]): Promise<Episode[]> {
		return this.episodeService.getSingleById(ids)
	}

	@Query((returns) => Episode)
	async episode(@Arg('id') id: number): Promise<Episodes> {
		return this.episodeService.getSingle(id)
	}
}
