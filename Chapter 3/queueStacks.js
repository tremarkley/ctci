class StackNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    if (!this.top) {
      this.top = new StackNode(data);
      return;
    }

    const newNode = new StackNode(data);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    if (!this.top) {
      return undefined;
    }
    const returnValue = this.top.data;
    this.top = this.top.next;
    return returnValue;
  }

  peek() {
    if (!this.top) {
      return undefined;
    }

    return this.top.data;
  }

  isEmpty() {
    return this.top === null;
  }
}

class QueueStack {
  constructor() {
    this.inbox = new Stack();
    this.outbox = new Stack();
  }

  enqueue(data) {
    if (this.outbox.isEmpty() && this.inbox.isEmpty()) {
      this.outbox.push(data);
      return;
    }

    this.inbox.push(data);
  }

  dequeue() {
    if (!this.outbox.isEmpty()) {
      return this.outbox.pop();
    }

    if (this.inbox.isEmpty()) {
      return undefined;
    }

    while (!this.inbox.isEmpty()) {
      this.outbox.push(this.inbox.pop());
    }

    return this.outbox.pop();

  }

  peek() {
    if (!this.outbox.isEmpty()) {
      return this.outbox.peek();
    }

    if (this.inbox.isEmpty()) {
      return undefined;
    }

    while (!this.inbox.isEmpty()) {
      this.outbox.push(this.inbox.pop());
    }

    return this.outbox.peek();
  }

  isEmpty() {
    return this.outbox.isEmpty() && this.inbox.isEmpty();
  }
}

const queue = new QueueStack();
queue.enqueue(1);
console.log(queue.isEmpty() === false ? 'passed' : 'failed');
console.log(queue.peek() === 1 ? 'passed' : 'failed');
console.log(queue.dequeue() === 1 ? 'passed' : 'failed');
console.log(queue.isEmpty() === true ? 'passed' : 'failed');
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue() === 1 ? 'passed' : 'failed');
console.log(queue.isEmpty() === false ? 'passed' : 'failed');
console.log(queue.dequeue() === 2 ? 'passed' : 'failed');
console.log(queue.dequeue() === 3 ? 'passed' : 'failed');
console.log(queue.dequeue() === 4 ? 'passed' : 'failed');
console.log(queue.isEmpty() === true ? 'passed' : 'failed');