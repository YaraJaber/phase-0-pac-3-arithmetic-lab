function add(a, b) {
    return a + b;
  }
  
  // Function to subtract two numbers
  function subtract(a, b) {
    return a - b;
  }
  
  // Function to multiply two numbers
  function multiply(a, b) {
    return a * b;
  }
  
  // Function to divide two numbers
  function divide(a, b) {
    if (b === 0) {
      return "Cannot divide by zero";
    }
    return a / b;
  }
  
  // Function to increment a number by 1
  function increment(n) {
    return n + 1;
  }
  
  // Function to decrement a number by 1
  function decrement(n) {
    return n - 1;
  }
  
  // Function to parse a string into an integer
  function makeInt(string) {
    return parseInt(string, 10);
  }
  
  // Function to parse a string into a float (decimal number)
  function preserveDecimal(string) {
    return parseFloat(string);
  }
  
  module.exports = {
    add,
    subtract,
    multiply,
    divide,
    increment,
    decrement,
    makeInt,
    preserveDecimal,
  };