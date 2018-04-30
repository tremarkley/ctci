// One Away: There are three types of edits that can be performed on strings: insert a character, 
// remove a character, or replace a character. Given two strings, write a function to check if 
// they are one edit (or zero edits) away.
// EXAMPLE
// pale, ple -> true 
// pales, pale -> true 
// pale, bale -> true 
// pale, bake -> false

const findOperation = (target, inputString) => {
  const differenceInLength = target.length - inputString.length;
  if (differenceInLength === 0) {
    return 'replace';
  } else if (differenceInLength === 1) {
    return 'insert';
  } else if (differenceInLength === -1) {
    return 'remove'
  }
  return 'invalid';
}

const oneAway = (target, inputString) => {
  const operationNeeded = findOperation(target, inputString);
  if (operationNeeded === 'invalid') {
    return false;
  }
  if (operationNeeded === 'replace') {
    let performedOperation = false;
    for (let i = 0; i < target.length; i += 1) {
      if (target[i] !== inputString[i]) {
        if (!performedOperation) {
          performedOperation = true;
        } else {
          return false;
        }
      }
    }
  } else if (operationNeeded === 'remove') {
    let targetIndex = 0;
    for (let i = 0; i < inputString.length; i += 1) {
      if (inputString[i] === target[targetIndex]) {
        targetIndex += 1;
      }
      if (i - targetIndex >= 1) {
        return false;
      }
    }
  } else if (operationNeeded === 'insert') {
    let inputStringIndex = 0;
    for (let i = 0; i < target.length; i += 1) {
      if (target[i] === inputString[inputStringIndex]) {
        inputStringIndex += 1;
      }
      if (i - inputStringIndex >= 1) {
        return false;
      }
    }
  }
  return true;
}

console.log(oneAway('pale', 'ple') === true);
console.log(oneAway('pales', 'pale') === true); 
console.log(oneAway('pale', 'bale') === true);
console.log(oneAway('pale', 'bake') === false);