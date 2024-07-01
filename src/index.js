import { counter } from "./counter";

document.querySelector("#app").innerHTML = `
  <h1 id="result">0</h1>
  <button id="incrementBtn">increment</button>
  <button id="decrementBtn">decrement</button>
`;

const incrementBtn = document.querySelector("#incrementBtn");
const decrementBtn = document.querySelector("#decrementBtn");
const result = document.querySelector("#result");

counter(incrementBtn, decrementBtn, result);
