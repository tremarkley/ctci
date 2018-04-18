class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  addChild(node) {
    if (node.value < this.value) {
      if (!this.left) {
        this.left = node;
      } else {
        this.left.addChild(node);
      }
    } else {
      if (!this.right) {
        this.right = node;
      } else {
        this.right.addChild(node);
      }
    }
  }
}

const createBST = (inputArray, minIndex = 0, maxIndex = inputArray.length - 1) => {
  const middleIndex = Math.floor((maxIndex + minIndex) / 2);
  const tree = new BinarySearchTree(inputArray[middleIndex]);
  // left side of middleIndex
  if (middleIndex - 1 >= minIndex) {
    tree.addChild(createBST(inputArray, minIndex, middleIndex - 1));
  }
  if (middleIndex + 1 <= maxIndex) {
    tree.addChild(createBST(inputArray, middleIndex + 1, maxIndex));
  }
  return tree;
}

const testArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const testArray2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

const testBST = createBST(testArray);
const testBST2 = createBST(testArray2);