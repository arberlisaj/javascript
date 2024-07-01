function addition(a) {
  return function(b) {
    return a + b;
  };
}

const add = (a) => (b) => a + b;
const divide = (a) => (b) => a / b;

const x = add(1)(5);
const y = divide(4)(2);

