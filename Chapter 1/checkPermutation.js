const checkPermutation = (string1, string2) => {
  if (string1.length !== string2.length) {
    return false;
  }
  const string1CharFrequencies = createFrequencyObject(string1);
  const string2CharFrequencies = createFrequencyObject(string2);
  return checkEquality(string1CharFrequencies, string2CharFrequencies);
}

const createFrequencyObject = (string)=> {
  const frequencyObj = {};
  for (let i = 0; i < string.length; i += 1) {
    if (frequencyObj[string[i]]) {
      frequencyObj[string[i]] += 1;
    } else {
      frequencyObj[string[i]] = 1;
    }
  }
  return frequencyObj;
}

const checkEquality = (obj1, obj2) => {
  for (key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}