// Palindrome: Implement a function to check if a linked list is a palindrome.

// palindrome means it is the same forwards and back 

// 1 -> 4 -> 10 -> 45 -> 10 -> 4 -> 1

// could do the normal way where you go through the entire list and put it on a stack
// then as you go through the linked list a second time then you can pop the items off the stack

// could we use the runner technique?

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

const isPalindrome = (head) => {
  const stack = [];
  // iterate through list 
  let currentNode = head;
  while (currentNode) {
    stack.push(currentNode.data);
    currentNode = currentNode.next;
  }
  currentNode = head;
  while (stack.length > 0) {
    const stackItem = stack.pop();
    if (stackItem !== currentNode.data) {
      return false;
    }
    currentNode = currentNode.next;
  }
  return true;
}

//  if we wanted to, we could reverse the linkedlist then compare the first half of the reversed list to the first half
//  of the original list
const reverseLinkedList = (head) => {
  let currentNode = head;
  const reversedList = new LinkedList();
  while (currentNode) {
    if (!reversedList.head) {
      reversedList.head = new Node(currentNode.data);
    } else {
      const prevHead = reversedList.head;
      reversedList.head = new Node(currentNode.data);
      reversedList.head.next = prevHead;
    }
    currentNode = currentNode.next;
  }
  return reversedList;
}

const linkedList = new LinkedList();
linkedList.appendToTail(1);
linkedList.appendToTail(4);
linkedList.appendToTail(10);
linkedList.appendToTail(45);
linkedList.appendToTail(10);
linkedList.appendToTail(4);
linkedList.appendToTail(1);
console.log(isPalindrome(linkedList.head));
const reversed = reverseLinkedList(linkedList.head);
