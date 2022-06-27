export class CreateLocationDto {
	id: number
	name: string
	type: string
	dimension: string
	url: string
	image_cover: string
	images: Array<string>
	createdAt: string
	residents: Array<Object>
}
