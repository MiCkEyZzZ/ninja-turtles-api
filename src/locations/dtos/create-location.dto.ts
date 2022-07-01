import { IsString, IsInt, IsArray } from 'class-validator'

export class LocationDto {
	@IsInt()
	id: number

	@IsString()
	name: string

	@IsString()
	type: string

	@IsString()
	dimension: string

	@IsString()
	url: string

	@IsString()
	image_cover: string

	@IsArray()
	images: Array<string>

	@IsString()
	createdAt: string

	@IsArray()
	residents: Array<Object>
}
