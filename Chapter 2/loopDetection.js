// Loop Detection: Given a circular linked list, implement an algorithm that 
// returns the node at the beginning of the loop.

// A -> B -> C -> D -> E -> F -> G -> C  

class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  appendToTail(data) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = new Node(data);
  }
}

const loopDetection = (head) => {
  
}
