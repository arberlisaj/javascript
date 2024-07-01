export function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";
  return n.toString();
}

export function calculateAverage(numbers) {
  if (numbers.length === 0) return NaN;
  const sum = numbers.reduce((total, current) => total + current, 0);
  return sum / numbers.length;
}

export function factorial(n) {
  let result = n;
  if (n === 0 || n === 1) return 1;
  while (n > 1) {
    n--;
    result *= n;
  }
  return result;
}

export function max(a, b) {
  if (a > b) return a;
  else if (b > a) return b;
  return a;
}

