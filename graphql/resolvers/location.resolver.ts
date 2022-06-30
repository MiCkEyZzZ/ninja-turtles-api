import { Query, Resolver, Mutation, Arg, Args } from 'type-graphql'
import { Location } from '../schema/location'
import { Locations } from '../schema/locations'
import { LocationService } from '../services/location.service'
import { LocationsArgs } from '../types/locations.args'

@Resolver(Location)
export class LocationResolver {
	constructor(private locationService: LocationService) {}

	@Query((returns) => Locations)
	async locations(@Args() { filter, page }: LocationsArgs): Promise<Location[]> {
		return this.locationService.getLocations()
	}

	@Query((returns) => Location)
	async locationsByIds(@Arg('ids') ids: number[]): Promise<Location[]> {
		return this.locationService.getSingleById(ids)
	}

	@Query((returns) => Location)
	async location(@Arg('id') id: number): Promise<Location> {
		return this.locationService.getSingle(id)
	}
}
