// Impelement a function called letterPositions which will return all the indices in the string where each character is found.
// For each letter, instead of returning just one number to represent its number of occurrences, multiple numbers may be needed to represent all the places in the string that it shows up. It means that array should be used for each key value


const letterPositions = (sentence) => {
  const isLetter = (char) => {
    return (/[a-zA-Z]/).test(char);
  };

  const results = {};

  for (let index in sentence) {
    let letter = sentence[index];
    if (isLetter(letter)) {
      if (!(results[letter])) {
        results[letter] = [Number(index)];
      } else {
        results[letter].push(Number(index));
      }
    }
  }
  return results;
};

module.exports = letterPositions;