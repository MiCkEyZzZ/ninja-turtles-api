const baseUrl = `http://localhost:${process.env.PORT || 8181}/api`

const createObjectData = (options: []): any =>
	Object.fromEntries(Object.entries(options).filter(([_, value = null]) => value !== null))

const checkArray = (res: []): any => (Array.isArray(res) ? res : [res])

const urlId = (url: []): [] => {
	const getId = (str: any): any => parseInt(str.match(/\d+$/), 10)

	return Array.isArray(url) ? url.map((u) => getId(u)) : getId(url)
}

const handleInfo = ({ stats }: any): any => {
	const getPage = (url: string): any => {
		const params = new URL(url)

		return parseInt(<string>params.searchParams.get('page'), 10)
	}

	return {
		...stats,
		next: () => (stats && stats.next ? getPage(stats.next) : null),
		prev: () => (stats && stats.prev ? getPage(stats.prev) : null),
	}
}

const collection = {
	exclude: '-_id - author -__v -edited',
	limit: 20,
	queries: {
		character: ['name', 'status', 'species', 'type', 'gender', 'occupation'],
		location: ['name', 'dimension', 'type'],
		episode: ['name', 'episode', 'season'],
	},
}

export { baseUrl, createObjectData, collection, checkArray, handleInfo, urlId }
