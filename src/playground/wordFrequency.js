function wordFrequency(phrase) {
  let frequency = {};
  let words = phrase.split(" ");
  for (const word of words) {
    if (word in frequency) {
      frequency[word]++;
    } else {
      frequency[word] = 1;
    }
  }
  return frequency;
}

export default wordFrequency;
