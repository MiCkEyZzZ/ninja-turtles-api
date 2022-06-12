const chai = require('chai')

const { expect } = chai
const chaiHttp = require('chai-http')
const server = require('../server.ts')

chai.use(chaiHttp)

const test = async (pathname = '') =>
  chai.request(server).get(`/api/character/${pathname}`)

const expectStructure = (body) => {
  expect(body).to.be.an('object')
  expect(body.info).to.be.an('object')
  expect(body.results).to.be.an('array')
}

describe('All Characters', () => {
  it('should get all characters', async () => {
    const { body } = await test()

    expectStructure(body)
    expect(body.results).to.have.lengthOf(20)
  })
})

describe('Single Character', () => {})
