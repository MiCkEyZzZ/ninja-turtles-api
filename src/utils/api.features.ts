/**
 * @param query
 * @param queryString
 */

class ApiFeatures {
  public query: any
  private readonly queryString: any

  constructor(query: any, queryString: any) {
    this.query = query
    this.queryString = queryString
  }

  public filter() {
    const queryObject = { ...this.queryString }
    const excludeFields = ['page', 'limit', 'fields']

    excludeFields.forEach((item: string) => delete queryObject[item])
  }

  public limitFields() {}

  public pagination() {
    // const page = this.queryString.page * 1 || 1
    // const limit = this.queryString.limit * 1 || 100
    // const skip = (page - 1) * limit
    //
    // this.query = this.query.skip(skip).limit(limit)
    //
    // return this
  }
}

export default ApiFeatures
