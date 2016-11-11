/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */

function calculatorModule () {

  // Private variables
  let _memory = 0;
  let _total = 0;


  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */
  function load(x) {
    _total = x;
    if (isNan(x)) {
      return false;
    }
    return _total;
  }
  load(6);

  /**
   * Return the value of `total`
   * @return { Number }
   */

  function getTotal(){
    return _total;
  }

  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */

  function add(x){
    return _total += x;
  }

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */

  function subtract(x){
    return _total -= x;
  }


  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */

  function multiply(x){
    return _total *= x;
  }

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */

  function divide(x){
    return _total /= x;
  }

  /**
   * Return the value stored at `memory`
   * @return { Number }
   */

  function recallMemory(){
    return _memory;
  }

  /**
   * Stores the value of `total` to `memory`
   */

  function saveMemory(){
    _memory = _total;
  }

  /**
   * Clear the value stored at `memory`
   */

  function clearMemory(){
    _memory = 0;
  }

  /**
   * Validation
   */




  return {
    load: load,
    getTotal: getTotal,
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    recallMemory: recallMemory,
    saveMemory: saveMemory,
    clearMemory: clearMemory,
  };
}