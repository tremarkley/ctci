const URLify = (string, numChars) => {
  const charArray = string.split('');
  let insertAtIndex = charArray.length - 1;
  for (let i = numChars - 1; i >= 0; i -= 1) {
    if (charArray[i] !== ' ') {
      charArray[insertAtIndex] = charArray[i];
      insertAtIndex -= 1;
    } else {
      encodeSpace(charArray, insertAtIndex);
      insertAtIndex -= 3;
    }
  }
  return charArray.join(''); 
}

const encodeSpace = (string, insertionPoint) => {
  let currentInsertion = insertionPoint;
  const encoding = ['0', '2', '%'];
  for (let i = 0; i < encoding.length; i += 1) {
    string[currentInsertion] = encoding[i];
    currentInsertion -= 1;
  }
}

console.log(URLify("Mr John Smith    ", 13));