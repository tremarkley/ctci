class Queue {
  constructor() {
    this.start = null;
    this.end = null;
  }

  enqueue(value) {
    const newItem = new QueueItem(value);
    if (this.start === null) {
      this.start = newItem;
      this.end = newItem;
      return;
    }
    this.end.next = newItem;
    this.end = newItem;
  }

  dequeue() {
    if (this.start === null) {
      return undefined;
    }
    const valueToReturn = this.start.value;
    if (this.start === this.end) {
      this.start = null;
      this.end = null;
    } else {
      this.start = this.start.next;
    }
    return valueToReturn;
  }

  peek() {
    if (this.start === null) {
      return undefined;
    }
    return this.start.value;
  }

  isEmpty() {
    return this.start === null;
  }
}

class QueueItem {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Graph {
  constructor() {
    this.nodes = [];
  }
  addNode(node) {
    this.nodes.push(node);
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  addChild(node) {
    this.children.push(node);
  }
}

const routeBetweenNodes = (node1, node2) => {
  const nodesVisitedByNode1 = {};
  const nodesVisitedByNode2 = {};
  let node1Queue = new Queue();
  let node2Queue = new Queue();
  node1Queue.enqueue(node1);
  node2Queue.enqueue(node2);
  //go through node1 first
  while (!node1Queue.isEmpty() || !node2Queue.isEmpty()) {
    const nextNode1Queue = new Queue();
    const nextNode2Queue = new Queue();
    while (!node1Queue.isEmpty()) {
      const nodeToExplore = node1Queue.dequeue();
      for (let i = 0; i < nodeToExplore.children.length; i += 1) {
        if (nodesVisitedByNode1[nodeToExplore.children[i].value] === undefined) {
          nextNode1Queue.enqueue(nodeToExplore.children[i]);
        }
      }
      //check if node2 has also visited this node
      if (nodesVisitedByNode2[nodeToExplore.value] !== undefined) {
        return true;
      }
      nodesVisitedByNode1[nodeToExplore.value] = true;
    }
    node1Queue = nextNode1Queue;
    while (!node2Queue.isEmpty()) {
      const nodeToExplore = node2Queue.dequeue();
      for (let i = 0; i < nodeToExplore.children.length; i += 1) {
        if (nodesVisitedByNode2[nodeToExplore.children[i].value] === undefined) {
          nextNode2Queue.enqueue(nodeToExplore.children[i]);
        }
      }
      //check if node1 has also visited this node
      if (nodesVisitedByNode1[nodeToExplore.value] !== undefined) {
        return true;
      }
      nodesVisitedByNode2[nodeToExplore.value] = true;
    }
    node2Queue = nextNode2Queue;
  }
  return false;
}

const node0 = new Node(0);
const node1 = new Node(1);
node0.addChild(node1);
const node2 = new Node(2);
node1.addChild(node2);
node2.addChild(node0);
const node3 = new Node(3);
node2.addChild(node3);
node3.addChild(node2);

const node4 = new Node(4);
const node5 = new Node(5);
const node6 = new Node(6);
node6.addChild(node5);
node5.addChild(node4);
node4.addChild(node6);

const graph = new Graph();
graph.addNode(node0);
graph.addNode(node4);
console.log(graph);

console.log(routeBetweenNodes(node3, node0) ? 'passed' : 'failed');
console.log(!routeBetweenNodes(node6, node1) ? 'passed' : 'failed');
console.log(routeBetweenNodes(node6, node4) ? 'passed' : 'failed');
console.log(routeBetweenNodes(node6, node5) ? 'passed' : 'failed');
console.log(routeBetweenNodes(node0, node1) ? 'passed' : 'failed');
console.log(!routeBetweenNodes(node1, node4) ? 'passed' : 'failed');
console.log(routeBetweenNodes(node2, node3) ? 'passed' : 'failed');
console.log(routeBetweenNodes(node0, node2) ? 'passed' : 'failed');

