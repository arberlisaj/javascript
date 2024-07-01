export function counter(incrementButton, decrementButton, result) {
  let counter = 0;
  const setCounter = (count) => {
    counter = count;
    result.innerHTML = counter;
  };
  incrementButton.addEventListener("click", () => setCounter(counter + 1));
  decrementButton.addEventListener("click", () => setCounter(counter - 1));
  setCounter(0);
}
