export const createObject = (obj) => {
    return Object.fromEntries(Object.entries(obj).filter(([_, value = null]) => value !== null))
}

export const baseUrl = `http://localhost:${process.env.PORT || 8080}/api`

export const urlId = (url) => {
    const getId = (str) => parseInt(str.match(/\d+$/))

    return Array.isArray(url) ? url.map(i => getId(i)) : getId(url)
}

export const checkArray = (response) => (Array.isArray(response) ? response : [response])

export const statusInfo = ({stats}) => {
    const getPage = (url) => {
        const params = new URL(url)

        return parseInt(params.searchParams.get('page'))
    }

    return {
        ...stats,
        next: () => (stats && stats.next ? getPage(stats.next) : null),
        prev: () => (stats && stats.prev ? getPage(stats.prev) : null)
    }
}

export const collection = {
    exclude: '-_id - author -__v -edited',
    limit: 12,
    queries: {
        character: ['name', 'status', 'species', 'type', 'gender'],
        series: ['name', 'episode'],
        location: ['name', 'dimension', 'type']
    }
}