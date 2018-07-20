'use strict'

const rotate = require('@pelevesque/matrix-transformers').rotate90
const reflect = require('@pelevesque/matrix-transformers').reflectHorizontally
const rmDuplicates = require('@pelevesque/remove-duplicates')

module.exports = (matrix, removeDuplicates = false) => {
  const matrix90 = rotate(matrix)
  const matrix180 = rotate(matrix90)
  const matrix270 = rotate(matrix180)
  const variants = []
  variants.push(matrix)
  variants.push(matrix90)
  variants.push(matrix180)
  variants.push(matrix270)
  variants.push(reflect(matrix))
  variants.push(reflect(matrix90))
  variants.push(reflect(matrix180))
  variants.push(reflect(matrix270))
  if (removeDuplicates) {
    rmDuplicates(variants)
  }
  return variants
}
