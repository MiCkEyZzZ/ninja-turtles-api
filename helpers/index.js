const message = {
    pageError: 'There is nothing here',
    personError: 'Person not found',
    locationError: 'Location not found',
    wrong: 'Something wrong, Please try again.'
}

const collection = {
    exclude: '',
    limit: 12,
    queries: {
        person: ['name', 'status', 'species', 'type', 'gender'],
        location: ['name', 'dimension', 'type']
    }
}

module.exports = {message, collection}