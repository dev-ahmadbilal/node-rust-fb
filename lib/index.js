var addon = require('../native');
const vanilla = require('./vanilla');

console.log(addon.hello());
console.log(addon.fibonacciIter(40));
console.log(addon.fibonacciRec(40));
console.log(vanilla.fibonacciIter(40));
console.log(vanilla.fibonacciRec(40));
