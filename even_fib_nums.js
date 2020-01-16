/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs(maxFibValue) {
  let sum = 0;
  let prev = 0;
  let curr = 1;
  let next;

  for (let i = 2; curr <= maxFibValue + 1; i++) {
    next = prev + curr;
    prev = curr;
    curr = next;

    if (curr % 2 === 0) {
      sum += curr;
    }
  }

  return sum;
}

// bonus round
function _highestFibonacciNumber(maxFibValue) {
  let highest = 0;

  //define your base case, validate your input

  let prev = 0;
  let curr = 1;
  let next;

  for (let i = 2; curr <= maxFibValue + 1; i++) {
    next = prev + curr;
    prev = curr;
    highest = curr;
    curr = next;
  }

  return highest;
}

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs: _sumFibs,
  highestFibonacciNumber: _highestFibonacciNumber
};
