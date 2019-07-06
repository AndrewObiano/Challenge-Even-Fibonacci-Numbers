/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs( maxFibValue ) {
  let sum = 0;
  
  // fibonacci
  let testArr = [0, 1];
  for (let i = 2; i < maxFibValue + 1; i++){
    testArr.push(testArr[i - 2] + testArr[i -1])
  } // end of fibonacci
  
  for(i=0; testArr[i]<=maxFibValue; i++){
    if(testArr[i]%2 === 0){ // check if even
      sum += testArr[i]; // add that even value
    }
  }

  return sum;
}


// bonus round
function _highestFibonacciNumber (maxFibValue){
  let highest = 0;

  //define your base case, validate your input

    // fibonacci
    let testArr = [0, 1];
    for (let i = 2; i < maxFibValue + 1; i++){
      testArr.push(testArr[i - 2] + testArr[i -1])
    } // end of fibonacci
    
    for(i=0; testArr[i]<=maxFibValue; i++){
      highest = testArr[i];
    }

  return highest;
};

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};
