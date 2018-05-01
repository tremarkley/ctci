// Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, 
// write a method to rotate the image by 90 degrees. Can you do this in place?

const rotateCorners = (matrix, startingIndex, endingIndex, offset) => {
  const coordinates = [[startingIndex, startingIndex + offset], 
    [startingIndex + offset, endingIndex], [endingIndex, endingIndex - offset], [endingIndex - offset, startingIndex]];
  let next = matrix[coordinates[0][0]][coordinates[0][1]];
  for (let i = 0; i < coordinates.length; i += 1) {
    nextCoordinates = (i + 1) % 4;
    // place next coords
    const temp = matrix[coordinates[nextCoordinates][0]][coordinates[nextCoordinates][1]];
    matrix[coordinates[nextCoordinates][0]][coordinates[nextCoordinates][1]] = next;
    next = temp;
  }
}

const rotateMatrix = (matrix) => {
  let startingIndex = 0;
  let endingIndex = matrix.length - 1;
  while (endingIndex > startingIndex) {
    // perform rotations around startingIndex  and endingIndex
    // rotate four points
    for (let i = startingIndex; i < endingIndex; i += 1) {
      rotateCorners(matrix, startingIndex, endingIndex, i - startingIndex);
    }
    startingIndex += 1;
    endingIndex -= 1;
  }
};

// [1, 2, 3, 4, 5]
// [1, 2, 3, 4, 5]
// [1, 2, 3, 4, 5]
// [1, 2, 3, 4, 5]
// [1, 2, 3, 4, 5]

console.log(rotateMatrix([[1, 2, 3, 4],
[1, 2, 3, 4],
[1, 2, 3, 4],
[1, 2, 3, 4]]));

console.log(rotateMatrix([
  [1,2,3],
  [4,5,6],
  [7,8,9]
]));

console.log(rotateMatrix([
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
]));

console.log(rotateMatrix([
  [2,29,20,26,16,28],[12,27,9,25,13,21],[32,33,32,2,28,14],[13,14,32,27,22,26],[33,1,20,7,21,7],[4,24,1,6,32,34]
]));

// as we move through the matrix we are going to tighten our boundaries on each side
// keep going while (startingRow > endingRow) because it is a square we dont need to check columns