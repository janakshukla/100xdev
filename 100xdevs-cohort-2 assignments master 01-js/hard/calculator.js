/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.res = 0;
  }
  add(number) {
    return (this.res += number);
  }
  subtract(number) {
    return (this.res -= number);
  }
  multiply(number) {
    return (this.res *= number);
  }
  divide(number) {
    if (number === 0) {
      throw new Error("invailid input");
    }
    return (this.res /= number);
  }
  clear() {
    this.res = 0;
  }
  getResult() {
    return this.res;
  }

  calculate(exp) {
    const withoutspacexp = exp.replace(/\s+/g, "");
    const match = withoutspacexp.match(/[^0-9()+\-*/.]/);
    if (match) {
      throw new Error("invilid input");
    }
    try {
      const res = eval(withoutspacexp);
      if (!Number.isFinite(res)) {
        throw new Error("number is infinite");
      }
      this.res = res;
    } catch (error) {
      throw new Error("problem during evalution");
    }
  }
}

module.exports = Calculator;
