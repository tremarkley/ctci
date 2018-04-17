class SetOfStacks {
  constructor(capacity) {
    this.capacity = capacity;
    this.topStack = new StackItem();
  }

  push(value) {
    if (this.topStack.getCount() === this.capacity) {
      const newTopStack = new StackItem();
      newTopStack.next = this.topStack;
      this.topStack = newTopStack;
    }
    this.topStack.push(value);
  }

  pop() {
    if (this.topStack.isEmpty()) {
      return undefined;
    }
    const valueToReturn = this.topStack.pop();
    if (this.topStack.isEmpty() && this.topStack.next !== null) {
      this.topStack = this.topStack.next;
    }
    return valueToReturn;
  }

  peek() {
    if (this.topStack.isEmpty()) {
      return undefined;
    }
    return this.topStack.peek();
  }
}

class StackNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.count = 0;
    this.top = null;
  }

  getCount() {
    return this.count;
  }

  push(value) {
    if (this.isEmpty()) {
      this.top = new StackNode(value);
    } else {
      const newNode = new StackNode(value);
      newNode.next = this.top;
      this.top = newNode;
    }
    this.count += 1;
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    const valueToReturn = this.top.value;
    this.top = this.top.next;
    this.count -= 1;
    return valueToReturn;
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

class StackItem extends Stack {
  constructor() {
    super();
    this.next = null;
  }
}


const testSetOfStacks= new SetOfStacks(3);
testSetOfStacks.push(1);
console.log(testSetOfStacks.peek());
console.log(testSetOfStacks.pop());
console.log(testSetOfStacks.peek());
testSetOfStacks.push(2);
testSetOfStacks.push(3);
testSetOfStacks.push(4);
testSetOfStacks.push(5);
console.log(testSetOfStacks.peek()); // 5
console.log(testSetOfStacks.pop()); // 5
console.log(testSetOfStacks.peek()); // 4
console.log(testSetOfStacks.pop()); // 4
console.log(testSetOfStacks.peek()); // 3
console.log(testSetOfStacks.pop()); // 3
console.log(testSetOfStacks.peek()); // 2
console.log(testSetOfStacks.pop()); // 2
console.log(testSetOfStacks.peek()); // undefined

