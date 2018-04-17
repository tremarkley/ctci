class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    if (this.isEmpty()) {
      this.top = new StackNode(value);
    } else {
      const newNode = new StackNode(value);
      newNode.next = this.top;
      this.top = newNode;
    }
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error('Stack is empty!');
    }
    const nodeToReturn = this.top.value;
    this.top = this.top.next;
    return nodeToReturn;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.top.value;
  }

  isEmpty() {
    return this.top === null;
  }
}

class StackNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MinStack extends Stack {
  constructor() {
    super();
    this.minStack = new Stack();
  }

  push(value) {
    super.push(value);
    if (value <= this.getMin() || this.getMin() === undefined) {
      this.minStack.push(value);
    }
  }

  pop() {
    const valueToReturn = super.pop();
    if (valueToReturn === this.getMin()) {
      this.minStack.pop();
    }
    return valueToReturn;
  }

  getMin() {
    return this.minStack.peek();
  }
}

const testMinStack = new MinStack();
testMinStack.push(6);
console.log(testMinStack.getMin());
testMinStack.push(5);
console.log(testMinStack.getMin());
testMinStack.push(10);
testMinStack.push(15);
console.log(testMinStack.pop());
console.log(testMinStack.getMin());
console.log(testMinStack.pop());
console.log(testMinStack.getMin());
console.log(testMinStack.pop());
console.log(testMinStack.getMin());
console.log(testMinStack.pop());
console.log(testMinStack.getMin());
console.log(testMinStack.pop());