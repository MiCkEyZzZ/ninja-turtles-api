const baseUrl = `http://localhost:${process.env.PORT || 8080}/api`

/**
 *
 * @param options
 */

const createObjectData = (options: []) =>
  Object.fromEntries(
    Object.entries(options).filter(([_, value = null]) => value !== null)
  )

/**
 *
 * @param res
 */

const checkArray = (res: []) =>
  Array.isArray(res) ? res : [res]

const urlId = (url: []) => {
  const getId = (str: any) => parseInt(str.match(/\d+$/), 10)

  return Array.isArray(url) ? url.map((u) => getId(u)) : getId(url)
}

/**
 *
 * @param stats
 */

const handleInfo = ({ stats }: any) => {
  const getPage = (url: string) => {
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

export {
  baseUrl,
  createObjectData,
  collection,
  checkArray,
  handleInfo,
  urlId,
}
