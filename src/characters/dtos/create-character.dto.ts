export class CreateCharacterDto {
	id: number
	name: string
	species: string
	type: string
	status: string
	occupation: string
	gender: string
	weapons: Array<string>
	bandana_color: string
	affiliation: string
	image_cover: string
	url: string
	createdAt: string
	location: Object
	episode: Array<Object>
}
