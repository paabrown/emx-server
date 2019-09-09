const { serializePuzzle, deserializePuzzle } = require('./puzzleSerializationHelpers')
const { completeMatrix } = require('./completeMatrix') 

const solvePuzzle = (puzzleStr) => {
  const puzzleMatrix = deserializePuzzle(puzzleStr)
  const finishedMatrix = completeMatrix(puzzleMatrix)
  return serializePuzzle(finishedMatrix)
}

module.exports = {
  solvePuzzle,
}
