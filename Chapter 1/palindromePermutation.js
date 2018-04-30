// Palindrome Permutation: Given a string, write a function to check if it 
// is a permutation of a palin­drome. A palindrome is a word or phrase that is the same  
// forwards and backwards. A permutation is a rearrangement of letters. 
// The palindrome does not need to be limited to just dictionary words.
// EXAMPLE
// Input: Tact Coa
// Output: True (permutations: "taco cat", "atco eta", etc.)

const isOdd = (number) => number % 2 !== 0 ? true : false;

const palindromePermutation = (inputString) => {
  const charFrequency = {};
  let charCount = 0;
  const inputStringLowerCase = inputString.toLowerCase();
  for (let i = 0; i < inputStringLowerCase.length; i += 1) {
    const char = inputStringLowerCase[i];
    if (char !== ' ') {
      charCount += 1;
      if (charFrequency[char] === undefined) {
        charFrequency[char] = 1;
      } else {
        charFrequency[char] += 1;
      }
    }
  }

  if (isOdd(charCount)) {
    let numberOfOddFrequencies = 0; // if perm has palindrome then must have just one number of odd Freqs
    for (const char in charFrequency) {
      numberOfOddFrequencies += isOdd(charFrequency[char]) ? 1 : 0;
      if (numberOfOddFrequencies > 1) {
        return false;
      }
    }
    if (numberOfOddFrequencies === 0) {
      return false;
    }
  } else {
    for (const char in charFrequency) {
      if (isOdd(charFrequency[char])) {
        return false;
      }
    }
  }
  return true;
}

console.log(palindromePermutation('Tact Coa') === true);
console.log(palindromePermutation('code') === false);