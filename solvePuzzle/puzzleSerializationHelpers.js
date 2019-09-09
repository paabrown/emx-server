const { PUZZLE_CHARS } = require('./constants')

const serializePuzzle = (matrix) => {
  const matrixWithStrRows = matrix.map((row, i) =>[PUZZLE_CHARS[i], ...row].join(''))
  return [` ${PUZZLE_CHARS.join('')}`, ...matrixWithStrRows].join('\n')
}

const deserializePuzzle = (puzzleStr) => {
  return puzzleStr
    .split('\n')
    .slice(1)
    .filter(Boolean)
    .map(rowStr => rowStr.slice(1).split(''))
}

module.exports = {
  serializePuzzle,
  deserializePuzzle,
}