/* global describe, it */
'use strict'

const expect = require('chai').expect
const getMatrixDihedralGroup = require('../index')

describe('#getMatrixDihedralGroup()', () => {
  it('should return the 8 variants of a non-symmetrical matrix', () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]
    const result = JSON.stringify(getMatrixDihedralGroup(matrix))
    const expected = JSON.stringify([
      [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ],
      [ [ 7, 4, 1 ], [ 8, 5, 2 ], [ 9, 6, 3 ] ],
      [ [ 9, 8, 7 ], [ 6, 5, 4 ], [ 3, 2, 1 ] ],
      [ [ 3, 6, 9 ], [ 2, 5, 8 ], [ 1, 4, 7 ] ],
      [ [ 3, 2, 1 ], [ 6, 5, 4 ], [ 9, 8, 7 ] ],
      [ [ 1, 4, 7 ], [ 2, 5, 8 ], [ 3, 6, 9 ] ],
      [ [ 7, 8, 9 ], [ 4, 5, 6 ], [ 1, 2, 3 ] ],
      [ [ 9, 6, 3 ], [ 8, 5, 2 ], [ 7, 4, 1 ] ]
    ])
    expect(result).to.equal(expected)
  })

  it('should return the 8 variants of a horizontally symmetrical matrix', () => {
    const matrix = [
      [1, 1, 1],
      [0, 0, 0],
      [0, 0, 0]
    ]
    const result = JSON.stringify(getMatrixDihedralGroup(matrix))
    const expected = JSON.stringify([
      [ [ 1, 1, 1 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ],
      [ [ 0, 0, 1 ], [ 0, 0, 1 ], [ 0, 0, 1 ] ],
      [ [ 0, 0, 0 ], [ 0, 0, 0 ], [ 1, 1, 1 ] ],
      [ [ 1, 0, 0 ], [ 1, 0, 0 ], [ 1, 0, 0 ] ],
      [ [ 1, 1, 1 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ],
      [ [ 1, 0, 0 ], [ 1, 0, 0 ], [ 1, 0, 0 ] ],
      [ [ 0, 0, 0 ], [ 0, 0, 0 ], [ 1, 1, 1 ] ],
      [ [ 0, 0, 1 ], [ 0, 0, 1 ], [ 0, 0, 1 ] ]
    ])
    expect(result).to.equal(expected)
  })

  it('should return the 4 variants of a horizontally symmetrical matrix with removed duplicates', () => {
    const matrix = [
      [1, 1, 1],
      [0, 0, 0],
      [0, 0, 0]
    ]
    const result = JSON.stringify(getMatrixDihedralGroup(matrix, true))
    const expected = JSON.stringify([
      [ [ 1, 1, 1 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ],
      [ [ 0, 0, 1 ], [ 0, 0, 1 ], [ 0, 0, 1 ] ],
      [ [ 0, 0, 0 ], [ 0, 0, 0 ], [ 1, 1, 1 ] ],
      [ [ 1, 0, 0 ], [ 1, 0, 0 ], [ 1, 0, 0 ] ]
    ])
    expect(result).to.equal(expected)
  })

  it('should return the 8 variants of a horizontally and vertically symmetrical matrix', () => {
    const matrix = [
      [1, 1, 1],
      [0, 0, 0],
      [1, 1, 1]
    ]
    const result = JSON.stringify(getMatrixDihedralGroup(matrix))
    const expected = JSON.stringify([
      [ [ 1, 1, 1 ], [ 0, 0, 0 ], [ 1, 1, 1 ] ],
      [ [ 1, 0, 1 ], [ 1, 0, 1 ], [ 1, 0, 1 ] ],
      [ [ 1, 1, 1 ], [ 0, 0, 0 ], [ 1, 1, 1 ] ],
      [ [ 1, 0, 1 ], [ 1, 0, 1 ], [ 1, 0, 1 ] ],
      [ [ 1, 1, 1 ], [ 0, 0, 0 ], [ 1, 1, 1 ] ],
      [ [ 1, 0, 1 ], [ 1, 0, 1 ], [ 1, 0, 1 ] ],
      [ [ 1, 1, 1 ], [ 0, 0, 0 ], [ 1, 1, 1 ] ],
      [ [ 1, 0, 1 ], [ 1, 0, 1 ], [ 1, 0, 1 ] ]
    ])
    expect(result).to.equal(expected)
  })

  it('should return the 2 variants of a horizontally and vertically symmetrical matrix with removed duplicates', () => {
    const matrix = [
      [1, 1, 1],
      [0, 0, 0],
      [1, 1, 1]
    ]
    const result = JSON.stringify(getMatrixDihedralGroup(matrix, true))
    const expected = JSON.stringify([
      [ [ 1, 1, 1 ], [ 0, 0, 0 ], [ 1, 1, 1 ] ],
      [ [ 1, 0, 1 ], [ 1, 0, 1 ], [ 1, 0, 1 ] ]
    ])
    expect(result).to.equal(expected)
  })

  it('should return the 8 variants of a horizontally, vertically, and diagonally symmetrical matrix', () => {
    const matrix = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0]
    ]
    const result = JSON.stringify(getMatrixDihedralGroup(matrix))
    const expected = JSON.stringify([
      [ [ 0, 0, 0 ], [ 0, 1, 0 ], [ 0, 0, 0 ] ],
      [ [ 0, 0, 0 ], [ 0, 1, 0 ], [ 0, 0, 0 ] ],
      [ [ 0, 0, 0 ], [ 0, 1, 0 ], [ 0, 0, 0 ] ],
      [ [ 0, 0, 0 ], [ 0, 1, 0 ], [ 0, 0, 0 ] ],
      [ [ 0, 0, 0 ], [ 0, 1, 0 ], [ 0, 0, 0 ] ],
      [ [ 0, 0, 0 ], [ 0, 1, 0 ], [ 0, 0, 0 ] ],
      [ [ 0, 0, 0 ], [ 0, 1, 0 ], [ 0, 0, 0 ] ],
      [ [ 0, 0, 0 ], [ 0, 1, 0 ], [ 0, 0, 0 ] ]
    ])
    expect(result).to.equal(expected)
  })

  it('should return the 1 variant  of a horizontally, vertically, and diagonally symmetrical matrix with removed duplicates', () => {
    const matrix = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0]
    ]
    const result = JSON.stringify(getMatrixDihedralGroup(matrix, true))
    const expected = JSON.stringify([
      [ [ 0, 0, 0 ], [ 0, 1, 0 ], [ 0, 0, 0 ] ]
    ])
    expect(result).to.equal(expected)
  })
})
