import { bugAdded } from "./store/bugs";
import { counter } from "./utils/counter";
import { projectAdded } from "./store/projects";
import configureStore from "./store/configureStore";
import hexGenerator from "./playground/hexGenerator";
import Image from "./assets/flower.jpg";
import "./style.css";

const store = configureStore();

store.subscribe(() => {
  console.log("state changed...", store.getState());
});

store.dispatch(bugAdded({ description: "Bug 1" }));
store.dispatch(projectAdded({ description: "Project 1" }));

document.querySelector("#app")!.innerHTML = `
  <img id="img"/>
  <h1 id="result">0</h1>
  <button id="incrementBtn">increment</button>
  <button id="decrementBtn">decrement</button>
`;
document.querySelector<HTMLImageElement>("#img")!.src = Image;
const incrementBtn = document.querySelector<HTMLButtonElement>("#incrementBtn");
const decrementBtn = document.querySelector<HTMLButtonElement>("#decrementBtn");
const result = document.querySelector<HTMLElement>("#result");

counter(incrementBtn, decrementBtn, result);

hexGenerator();
