export default board => {
  return board.reduce((total, row) => {
    return total + row.reduce((subtotal, square) => {
      return square === 'X' ? subtotal + 1 : subtotal
    }, 0);
  }, 0);
};
