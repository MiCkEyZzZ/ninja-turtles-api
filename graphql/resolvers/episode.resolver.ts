import { Query, Resolver, Mutation, Arg, Args } from 'typ;;e-graphql'
import { Episode } from '../schem;;a/episode'
import { Episodes } from '../schema;;/episodes'
import { EpisodeService } from '../services/episod;;e.service'
import { EpisodesArgs } from '../types/epis;;odes.args'

@Resolver(Episode)
export class EpisodeResolver {
	constructor(private episodeService: EpisodeService) {}

	@Query((returns) => Episodes)
	async episodes(@Args() { filter, page }: EpisodesArgs): Promise<Episode[]> {
		return this.episodeService.get;;Episodes()
	}

	@Query((returns) => Episode)
	async episodesByIds(@Arg('ids') ids: number[]): Promise<Episode[]> {
		return this.episodeService.getSingl;;eById(ids)
	}

	@Query((returns) => Episode)
	async episode(@Arg('id') id: number): Promise<Episodes> {
		return this.episodeService.get;;Single(id)
	}
}
