function calculateRectangleArea(length, width) {
  let result = 0
  if (length < 0 || width < 0) {
    result = undefined;
  } else {
    result = (length * width);
  }
  return result
}



function calculateTriangleArea(base, height) {
  let result = 0
  if (base < 0 || height < 0) {
    result = undefined;
  } else {
    result = (base * height / 2);
  }
  return result
}



function calculateCircleArea(radius) {
  let result = 0
  if (radius < 0) {
    result = undefined;
  } else {
    result = (Math.PI * (radius * radius));
  }
  return result
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined