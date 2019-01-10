export default (x, y, diff) => {
  if (!diff) { return [] }
  let result = [];
  for (let i = y; i--;) {
    let row = [];
    for (let j = x; j--;) {
      row.push(Math.floor(Math.random() * diff));
    }
    result.push(row);
  }
  // make sure top left always starts on the first colour
  result[0][0] = 'X';
  return result;
}
