export class EpisodeEntity {
	constructor(private readonly _id: number) {}

	get id(): number {
		return this._id
	}
}
