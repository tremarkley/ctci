// Intersection: Given two (singly) linked lists, determine if the two lists intersect. 
// Return the intersecting node. Note that the intersection is defined based on reference, not value. 
// That is, if the kth node of the first linked list is the exact same node (by reference) as 
// the jth node of the second linked list, then they are intersecting.
// Hints:#20, #45, #55, #65, #76, #93, #111, #120, #129

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

class Result {
  constructor(hasIntersection, lengthList1, lengthList2) {
    this.hasIntersection = hasIntersection;
    this.lengthList1 = lengthList1;
    this.lengthList2 = lengthList2;
  }
}

const checkTails = (head1, head2) => {
  let currentNode1 = head1;
  let list1Count = 1;
  let tail1;
  let currentNode2 = head2;
  let list2Count = 1;
  let tail2;
  while (currentNode1.next) {
    currentNode1 = currentNode1.next;
    list1Count += 1;
  }
  tail1 = currentNode1;
  while (currentNode2.next) {
    currentNode2 = currentNode2.next;
    list2Count += 1;
  }
  tail2 = currentNode2;
  if (tail1 === tail2) {
    return new Result(true, list1Count, list2Count);
  } else {
    return new Result(false);
  }
}

const findIntersection = (head1, head2) => {
  let result = checkTails(head1, head2);
  if (!result.hasIntersection) {
    return false;
  }
  let offset = result.lengthList1 - result.lengthList2;
  let currentNode1 = head1;
  let currentNode2 = head2;
  if (offset > 0) {
    // list1 is longer so need to iterate through it based on offset
    while (offset > 0) {
      offset -= 1;
      currentNode1 = currentNode1.next;
    }
  } else {
    while (offset < 0) {
      offset += 1;
      currentNode2 = currentNode2.next;
    }
  }
  // now we can loop through each until we find the intersection
  while (currentNode1) {
    if (currentNode1 === currentNode2) {
      return currentNode2;
    }
    currentNode1 = currentNode1.next;
    currentNode2 = currentNode2.next;
  }
}

const linkedList = new LinkedList();
linkedList.appendToTail(1);
linkedList.appendToTail(4);
linkedList.appendToTail(10);
linkedList.appendToTail(45);
linkedList.appendToTail(10);
linkedList.appendToTail(4);
linkedList.appendToTail(1);

const linkedList2 = new LinkedList();
linkedList2.appendToTail(1);
linkedList2.appendToTail(4);
linkedList2.appendToTail(10);
linkedList2.appendToTail(45);
linkedList2.appendToTail(10);
linkedList2.appendToTail(4);
linkedList2.appendToTail(1);

const linkedList3 = new LinkedList();
linkedList3.appendToTail(3);
linkedList3.appendToTail(23);
linkedList3.appendToTail(30);
linkedList3.head.next.next.next = linkedList.head;

const linkedList4 = new LinkedList();
linkedList4.head = linkedList.head.next.next.next.next.next;

console.log(findIntersection(linkedList.head, linkedList.head) === linkedList.head);
console.log(!findIntersection(linkedList.head, linkedList2.head));
console.log(findIntersection(linkedList.head, linkedList3.head) === linkedList.head);
console.log(findIntersection(linkedList.head, linkedList4.head) === linkedList.head.next.next.next.next.next);
