import { IsString, IsInt, IsArray } from 'class-validator'

export class EpisodeDto {
	@IsInt()
	id: number

	@IsString()
	name: string

	@IsString()
	episode: string

	@IsArray()
	producers: Array<string>

	@IsString()
	season: string

	@IsString()
	air_date: string

	@IsString()
	image_cover: string

	@IsString()
	url: string

	@IsString()
	createdAt: string

	@IsArray()
	characters: Array<Object>
}
