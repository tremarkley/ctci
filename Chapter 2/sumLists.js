class Node {
  constructor() {
    this.data = null;
    this.next = null;
  }
}

const handleLeftoverNodes = (result, nodeToAppend, carriedTen) => {
  let currentNode = nodeToAppend;
  while (carriedTen) {
    if (currentNode) {
      let sum = currentNode.data + 1;
      if (sum < 10) {
        carriedTen = false;
      } else {
        sum = 0;
      }
      result.data = sum;
      result.next = new Node();
      result = result.next;
      currentNode = currentNode.next;
    } else {
      if (carriedTen) {
        result.data = 1;
        carriedTen = false;
      }
    }
  }
  if (currentNode) {
    result.data = currentNode.data;
    result.next = currentNode.next;
  }
}

const sumLinkedList = (list1, list2) => {
  let carriedTen = false;
  let list1currentNode = list1;
  let list2currentNode = list2;
  let result = new Node();
  let next = result;
  while (list1currentNode && list2currentNode) {
    let sum = list1currentNode.data + list2currentNode.data;
    if (carriedTen) {
      sum += 1;
    }
    if (sum >= 10) {
      carriedTen = true;
      sum = sum % 10;
    }
    next.data = sum;
    list1currentNode = list1currentNode.next;
    list2currentNode = list2currentNode.next;
    if (list1currentNode || list2currentNode) {
      next.next = new Node();
      next = next.next;
    }
  }
  if (list1currentNode) {
    handleLeftoverNodes(next, list1currentNode, carriedTen);
  }
  if (list2currentNode) {
    handleLeftoverNodes(next, list2currentNode, carriedTen);
  }
  return result;
}

const node1 = new Node();
node1.data = 8;
node1.next = new Node();
node1.next.data = 8;
node1.next.next = new Node();
node1.next.next.data = 2;
const node2 = new Node();
node2.data = 1;
node2.next = new Node();
node2.next.data = 9;
// node2.next.next = new Node();
// node2.next.next.data = 2;

const sum = sumLinkedList(node1, node2);
console.log(sum);
