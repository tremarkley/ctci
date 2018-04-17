class ThreeStacks {
  constructor(capacity) {
    this.capacity = capacity;
    this.values;
    this.size = [0, 0, 0];
    this.initialize();
  }

  initialize() {
    this.values = new Array(this.capacity * 3);
  }

  push(stackNum, value) {
    if (this.size[stackNum] >= this.capacity) {
      throw new Error('stack has reach capacity');
    }
    const top = this.getTopIndex(stackNum);
    this.size[stackNum] += 1;
    this.values[top - 1] = value;
  }

  pop(stackNum) {
    if (this.size[stackNum] <= 0) {
      return undefined;
    }
    const top = this.getTopIndex(stackNum);
    const returnValue = this.values[top];
    this.values[top] = 0;
    this.size[stackNum] -= 1;
    return returnValue;
  }

  peek(stackNum) {
    if (this.size[stackNum] <= 0) {
      return undefined;
    }
    const top = this.getTopIndex(stackNum);
    return this.values[top];
  }

  getTopIndex(stackNum) {
    // if there are no items in the stack then the top should be -1 from starting Index
    const startingIndex = this.getStartingIndex(stackNum);
    return startingIndex - this.size[stackNum] + 1;
  }

  getStartingIndex(stackNum) {
    const start = (stackNum * this.capacity) + (this.capacity - 1);
    return start;
  }
} 

const threeStacks = new ThreeStacks(5);
threeStacks.push(0, 1);
threeStacks.push(0, 2);
threeStacks.push(0, 3);
threeStacks.push(0, 4);
threeStacks.push(0, 5);
threeStacks.push(1, 1);
threeStacks.push(2, 1);
console.log(threeStacks.pop(0));
console.log(threeStacks.peek(1));
console.log(threeStacks.pop(0));
