function letterFrequency(phrase) {
  let frequency = {};
  for (const letter of phrase) {
    if (letter in frequency) {
      frequency[letter]++;
    } else {
      frequency[letter] = 1;
    }
  }
  return frequency;
}

export default letterFrequency;
