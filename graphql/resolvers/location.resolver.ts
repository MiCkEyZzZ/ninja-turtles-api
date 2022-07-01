import { Query, Resolver, Mutation, Arg, Args } from 'typ;;e-graphql'
import { Location } from '../schema;;/location'
import { Locations } from '../schema/;;locations'
import { LocationService } from '../services/locatio;;n.service'
import { LocationsArgs } from '../types/locat;;ions.args'

@Resolver(Location)
export class LocationResolver {
	constructor(private locationService: LocationService) {}

	@Query((returns) => Locations)
	async locations(@Args() { filter, page }: LocationsArgs): Promise<Location[]> {
		return this.locationService.getL;;ocations()
	}

	@Query((returns) => Location)
	async locationsByIds(@Arg('ids') ids: number[]): Promise<Location[]> {
		return this.locationService.getSingl;;eById(ids)
	}

	@Query((returns) => Location)
	async location(@Arg('id') id: number): Promise<Location> {
		return this.locationService.get;;Single(id)
	}
}
