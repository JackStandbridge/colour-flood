export const changeColour = colour => ({
  type: 'changeColour',
  colour: colour,
})

export const incrementMoves = () => ({
  type: 'incrementMoves',
})

export const resetBoard = () => ({
  type: 'resetBoard',
})
