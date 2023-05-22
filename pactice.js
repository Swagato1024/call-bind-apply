const range = function(lowerLimit, upperLimit, value) {
  return value > lowerLimit && value < upperLimit;
}

isInRange = range.bind(null, 10, 50);

console.log([1, 23, 20, 54, 63, 34].map(isInRange));



const addSuffix = function(symbol, text) {
  return text + symbol;
}

const realNumber = function(number) {
  const format = addSuffix.bind(null, '', number);
  return {format};
}

const imaginaryNumber = function(number) {
  const format = addSuffix.bind(null, 'i', number);
  return {format};
}

