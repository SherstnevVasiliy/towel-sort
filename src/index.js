
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let newArr = [];
  if (matrix) {
      matrix.map(element => {
      if (Array.isArray(element)) {
          if (matrix.indexOf(element) % 2) {
            newArr.push(...element.reverse())
            } else  newArr.push(...element);
      } else {
        newArr.push(element);
      }
  });
  return newArr;
  } else return [] 
};
