export class CreateEpisodeDto {
	id: number
	name: string
	episode: string
	producers: Array<string>
	season: string
	air_date: string
	image_cover: string
	url: string
	createdAt: string
	characters: Array<Object>
}
