// Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.

const zeroMatrix = (inputMatrix) => {
  const zerosToConvert = { count: 0 };
  // mark zeros with string
  markZeros(inputMatrix, zerosToConvert);
  // write zeros
  for (let i = 0; i < inputMatrix.length; i += 1) {
    for (let j = 0; j < inputMatrix[0].length; j += 1){
      if (zerosToConvert.count === 0) {
        return;
      }
      if (inputMatrix[i][j] === 'zero') {
        convertZeros(inputMatrix, i, j, zerosToConvert);
      }
    }
  }
};

const markZeros = (inputMatrix, zerosToConvert) => {
  // first pass which marks zeros
  for (let i = 0; i < inputMatrix.length; i += 1) {
    for (let j = 0; j < inputMatrix[0].length; j += 1) {
      if (inputMatrix[i][j] === 0) {
        inputMatrix[i][j] = 'zero';
        zerosToConvert.count += 1;
      }
    }
  }
};

const convertZeros = (inputMatrix, i, j, zerosToConvert) => {
  inputMatrix[i][j] = 0;
  zerosToConvert.count -= 1;
  // convert row
  for (let column = 0; column < inputMatrix[0].length; column += 1) {
    if (inputMatrix[i][column] === 'zero') {
      convertZeros(inputMatrix, i, column, zerosToConvert);
    } else {
      inputMatrix[i][column] = 0;
    }
  }

  for (let row = 0; row < inputMatrix.length; row += 1) {
    if (inputMatrix[row][j] === 'zero') {
      convertZeros(inputMatrix, row, j, zerosToConvert);
    } else {
      inputMatrix[row][j] = 0;
    }
  }
};

const test = [
  [1,1,1],
  [1,0,1],
  [1,1,1]
];

const test1 = [
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
];

const test2 = [
  [0, 1],
  [0, 0]
]
zeroMatrix(test);
zeroMatrix(test1);
zeroMatrix(test2)


// if a zero is found then it's entire row and column is set to zero
// after converting a column to zero then do all those rows become zeros?
// one way I am thinking to do this is to pass through array once, if you find any zeros convert them to 
// a predefined string
// then after doing this iterate through matrix again and if you find that string convert it and all integers 
// in row and column to zero