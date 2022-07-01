import { IsString, IsInt, IsArray, IsObject } from 'class-validator'

export class CharacterDto {
	@IsInt()
	id: number

	@IsString()
	name: string

	@IsString()
	species: string

	@IsString()
	type: string

	@IsString()
	status: string

	@IsString()
	occupation: string

	@IsString()
	gender: string

	@IsArray()
	weapons: Array<string>

	@IsString()
	bandana_color: string

	@IsString()
	affiliation: string

	@IsString()
	image_cover: string

	@IsString()
	url: string

	@IsString()
	createdAt: string

	@IsObject()
	location: Object

	@IsArray()
	episode: Array<Object>
}
