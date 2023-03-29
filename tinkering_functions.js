/*
function laugh(x) {
  for (let i = 0; i <= x; i++) {
      console.log('ha')
  } return "!";
} 

console.log(laugh(3))

function isThisWorking(input) {
  console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
  return "Returning: I am returning this string!";
}

isThisWorking(3);


function square(x) {
  return x * x;
}

function subtractFour(x) {
  return square(x) - 4;
}

console.log(subtractFour(5));



function addTen(x) {
  return x + 10;
}

function divideByThree(y) {
  return y / 3;
}

var result = addTen(2);
console.log(divideByThree(result));


function sayHi(name) {
  var greeting = "Hello";
  console.log(greeting + " " + name);
}

sayHi("Julia");

*/

function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
      line += "* ";
  }
  return line + "\n";
}

function buildTriangle(length) {
  let triangle = ''

  for (let lineLength = 1; lineLength <= length; lineLength++) {
      triangle = triangle + makeLine(lineLength)
  }
  return triangle
}

console.log(buildTriangle(5))