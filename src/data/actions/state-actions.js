export const changeColour = colour => ({
  type: 'changeColour',
  colour: colour,
});

export const incrementMoves = () => ({
  type: 'incrementMoves',
});

export const resetBoard = () => ({
  type: 'resetBoard',
});

export const updateDifficulty = difficulty => ({
  type: 'updateDifficulty',
  difficulty: difficulty,
});

export const undo = () => ({
  type: 'undo',
})
