export default (board, newColour) => {
  let prevBoard = board;

  const explore = board => (

    board.map((row, yCoord) => (

      row.map((square, xCoord) => (

        // checks around the current square
        [
          { x: xCoord, y: yCoord - 1 }, // top
          { x: xCoord + 1, y: yCoord }, // right
          { x: xCoord, y: yCoord + 1 }, // bottom
          { x: xCoord - 1, y: yCoord }, // left
        ]

        // make sure neighbours are in bounds
        .filter(coords => (
          coords.x >= 0 &&
          coords.y >= 0 &&
          coords.x < board.length &&
          coords.y < row.length
        ))

        // get contents of neighbour
        .map(coords => (
          board[coords.y][coords.x]
        ))

        // check if neighbour is X and current square is
        // new colour and change square to X if so
        .reduce((acc, value) => (
          value === 'X' && acc === newColour ? 'X' : acc
        ), square)

      ))

    ))

  )

  let newBoard = explore(prevBoard);

  // function only adds nearest neighbours, but may have to
  // reach further. Keep checking until the new board is the
  // same as the previous one.
  while (JSON.stringify(newBoard) !== JSON.stringify(prevBoard)) {
    prevBoard = newBoard;
    newBoard = explore(prevBoard);
  }

  return newBoard;

}
