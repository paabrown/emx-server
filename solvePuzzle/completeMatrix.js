const { LinkedListNode } = require('./LinkedListNode')

const compareVals = (val1, val2) => {
  if (val1 > val2) {
    return '>'
  } else if (val1 < val2) {
    return '<'
  }
  
  return '='
}

const calculateCharValsFromIncompleteMatrix = (puzzleMatrix) => {
  const nodes = puzzleMatrix.map((_, char) => new LinkedListNode(char))

  // use the incomplete matrix to create a linked list representing
  // the correct ascending order of the chars
  for (let i = 0; i < puzzleMatrix.length; i++) {
    const row = puzzleMatrix[i]

    for (let j = 0; j < row.length; j++) {      
      const comparator = row[j]
      if (comparator === '<') {
        nodes[i].next = nodes[j]
        nodes[j].prev = nodes[i]

      } else if (comparator === '>') {
        nodes[j].next = nodes[i]
        nodes[i].prev = nodes[j]
      }
    }
  }

  let head = nodes[0]
  while (head.prev) {
    head = head.prev
  }

  // convert the linked list into an array in which the index
  // represents the char, and the value at that index represents
  // the "size" of that char
  //(aka its index in an ascending array of the chars)
  let charVals = []
  let node = head
  let val = 0
  while (node) {
    charVals[node.val] = val
    val++
    node = node.next
  }

  return charVals
}

const createCompleteMatrixFromCharVals = (charVals) => {
  return charVals.map(charVal1 => {
    return charVals.map(charVal2 => compareVals(charVal1, charVal2))
  })
}

const completeMatrix = (puzzleMatrix) => {
  const charVals = calculateCharValsFromIncompleteMatrix(puzzleMatrix)
  return createCompleteMatrixFromCharVals(charVals)
}

module.exports = {
  completeMatrix
}