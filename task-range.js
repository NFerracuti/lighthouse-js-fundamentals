const range = function(s, e, st) {
  let out = [];
  if (st == undefined || e == undefined || st == undefined) {
    return out;
  } else if (st > e) {
    return out;
  } else if (st <= 0) {
    return out;
  } else {
  for (let i = s; i <= e; i = i + st) {
    out.push(i);
  }
  return out;
  }
};


console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));