// String Rotation: Assume you have a method isSubstring which checks if one word is a substring of another. 
// Given two strings, s1 and s2, write code to check if s2 
// is a rotation of s1 using only one call to isSubstring (e.g.,"waterbottle" is a rotation of"erbottlewat").

// with a rotation there is some point that it can be split such that 
// s1 = xy = waterbottle where x = wat and y = erbottle
// s2 = yx = erbottlewat
// and therefore if you concat s1 to be xyxy, you get yx in the middle, and yx should be a substring of xyxy

const isSubstring = (s1, s2) =>  {
  return s1.indexOf(s2) !== -1;
}

const stringRotation = (s1, s2) => {
  if (s1.length === s2.length) {
    const concatenated = s1 + s1;
    return isSubstring(concatenated, s2);
  }
  return false;
}

console.log(stringRotation("waterbottle", 'erbottlewat'));