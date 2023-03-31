const lastIndexOf = function(a,b) {
  let out = -1;
  for (let i = a.length - 1; i >= 0; i--) {
    if (a[i] === b) {
      out = i;
      return out;
    }
  } return out;
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);