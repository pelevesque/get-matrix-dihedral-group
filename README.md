[![Build Status](https://travis-ci.org/pelevesque/get-matrix-dihedral-group.svg?branch=master)](https://travis-ci.org/pelevesque/get-matrix-dihedral-group)
[![Coverage Status](https://coveralls.io/repos/github/pelevesque/get-matrix-dihedral-group/badge.svg?branch=master)](https://coveralls.io/github/pelevesque/get-matrix-dihedral-group?branch=master)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# get-matrix-dihedral-group

Gets all the variants of a matrix dihedral group.

## Node Repository

[https://www.npmjs.com/package/@pelevesque/get-matrix-dihedral-group](https://www.npmjs.com/package/@pelevesque/get-matrix-dihedral-group)

## Installation

`npm install @pelevesque/get-matrix-dihedral-group`

## Tests

### Standard Style & Unit Tests

`npm test`

### Unit Tests & Coverage

`npm run cover`

## Usage

### Requiring the module

```js
const getMatrixDihedralGroup = require('@pelevesque/get-matrix-dihedral-group')
```

### Retrieving the Matrix Dihedral Group

```js
const matrix = [
  [1, 1, 1],
  [0, 0, 0],
  [0, 0, 0]
]
const result = getMatrixDihedralGroup(matrix)
// result is now equal to the array below
result = [
  [ [ 1, 1, 1 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ],
  [ [ 0, 0, 1 ], [ 0, 0, 1 ], [ 0, 0, 1 ] ],
  [ [ 0, 0, 0 ], [ 0, 0, 0 ], [ 1, 1, 1 ] ],
  [ [ 1, 0, 0 ], [ 1, 0, 0 ], [ 1, 0, 0 ] ],
  [ [ 1, 1, 1 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ],
  [ [ 1, 0, 0 ], [ 1, 0, 0 ], [ 1, 0, 0 ] ],
  [ [ 0, 0, 0 ], [ 0, 0, 0 ], [ 1, 1, 1 ] ],
  [ [ 0, 0, 1 ], [ 0, 0, 1 ], [ 0, 0, 1 ] ]
]
```

In the example above, some elements of the group are identical because there is symmetry in the original element.

Duplicate elements can be removed by turning on the `removeDuplicates` flag as in the example below.

```js
const matrix = [
  [1, 1, 1],
  [0, 0, 0],
  [0, 0, 0]
]
const removeDuplicates = true
const result = getMatrixDihedralGroup(matrix, removeDuplicates)
// result is now equal to the array below
result = [
  [ [ 1, 1, 1 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ],
  [ [ 0, 0, 1 ], [ 0, 0, 1 ], [ 0, 0, 1 ] ],
  [ [ 0, 0, 0 ], [ 0, 0, 0 ], [ 1, 1, 1 ] ],
  [ [ 1, 0, 0 ], [ 1, 0, 0 ], [ 1, 0, 0 ] ]
]
```
