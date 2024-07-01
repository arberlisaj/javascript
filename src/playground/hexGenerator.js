const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

function randomNumberGenerator() {
  return Math.floor(Math.random() * hex.length);
}
function hexGenerator() {
  const color = Array(6)
    .fill("")
    .map(() => hex[randomNumberGenerator()])
    .join("");
  return `#${color}`;
}

export default hexGenerator;
