export default (board, newColour) => {
  let prevBoard = [...board];

  const explore = board => {

    let newBoard = board.map((row, yCoord) => {

      let newRow = row.map((square, xCoord) => {

        let newSquare = [
          { x: xCoord, y: yCoord - 1 }, // top
          { x: xCoord + 1, y: yCoord }, // right
          { x: xCoord, y: yCoord + 1 }, // bottom
          { x: xCoord - 1, y: yCoord }, // left
        ].filter(coords => {
          return (
            coords.x >= 0 &&
            coords.y >= 0 &&
            coords.x < board.length &&
            coords.y < row.length
          );
        }).map(coords => (
          board[coords.y][coords.x]
        )).reduce((acc, value) => {
          return value === 'X' && acc === newColour ? 'X' : acc;
        }, square);

        return newSquare;

      });

      return newRow;

    });

    return newBoard;

  }

  let newBoard = explore([...prevBoard]);

  // function only adds nearest neighbours, but may have to
  // reach further. Keep checking until the new board is the
  // same as the previous one.
  while (JSON.stringify([...newBoard]) !== JSON.stringify([...prevBoard])) {
    prevBoard = [...newBoard];
    newBoard = explore([...prevBoard]);
  }

  return newBoard;

}
