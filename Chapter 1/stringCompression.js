// String Compression: Implement a method to perform basic string compression using the counts of repeated characters. 
// For example, the string aabcccccaaa would become a2b1c5a3. If the "compressed" string would not become 
// smaller than the original string, your method should return the original string. 
// You can assume the string has only uppercase and lowercase letters (a - z).

const stringCompression = (inputString) => {
  let resultString = [];
  let currentChar;
  let charCount = 0;
  for (let i = 0; i < inputString.length; i += 1) {
    if (inputString[i] !== currentChar) {
      if (currentChar !== undefined) {
        resultString.push(charCount);
        charCount = 0; // reset char count
      }
      currentChar = inputString[i]; // set new currentChar
      resultString.push(currentChar);
      //need plus one because we will have to add char count at the end.
      if (resultString.length + 1 >= inputString.length) {
        return inputString;
      }
    }
    // increment count
    charCount += 1;
  }
  // push on remaining char count
  resultString.push(charCount);
  return resultString.join('');
}

console.log(stringCompression('abcdef'));