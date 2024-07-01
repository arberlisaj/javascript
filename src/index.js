import { bugAdded } from "./store/bugs";
import configureStore from "./store/configureStore";
import { counter } from "./utils/counter";
import { projectAdded } from "./store/projects";
import "./style.css";

document.querySelector("#app").innerHTML = `
  <h1 id="result">0</h1>
  <button id="incrementBtn">increment</button>
  <button id="decrementBtn">decrement</button>
`;

const incrementBtn = document.querySelector("#incrementBtn");
const decrementBtn = document.querySelector("#decrementBtn");
const result = document.querySelector("#result");

counter(incrementBtn, decrementBtn, result);

const store = configureStore();
store.subscribe(() => {
  console.log("state changed...", store.getState());
});

 store.dispatch(bugAdded({ description: "Bug 1" }));
 store.dispatch(projectAdded({ description: "Project 1" }));
