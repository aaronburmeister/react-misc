/* eslint-disable no-unused-expressions */

import { expect } from 'chai'

import foo from '../'

describe('node-es6-template', () => {
  it('should return foo', done => {
    const output = foo()
    expect(output).to.equal('foo')
    done()
  })
})
