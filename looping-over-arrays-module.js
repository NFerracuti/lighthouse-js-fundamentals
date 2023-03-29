const amounts = [61.00, 52.25, 112.99, 5.00]

/* here's the old method:

let total = 0
for (let x = 0; x < amounts.length; x++) {
  total += amounts[x];
}
console.log('Order total is: ' + total);
*/

// here's the new method:

let total = 0;
for (let amount of amounts) {
  total += amount;
}
console.log('Order total is: ', total);