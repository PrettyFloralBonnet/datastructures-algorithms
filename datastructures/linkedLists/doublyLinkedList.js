import { LinkedList, Node} from "linkedList.js"


class DoublyLinkedNode extends Node {
    constructor(value) {
        super(value, value)
        this.previous = null;
    }
}


class DoublyLinkedList extends LinkedList {
    constructor(value) {
        super(value, value)
        this.head.previous = null
    }

    appendNode(value) {
        const newNode = new DoublyLinkedNode(value);
        newNode.previous = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prependNode(value) {
        const newNode = new DoublyLinkedNode(value);
        newNode.next = this.head;
        this.head.previous = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }

    insert(index, value) {
        if (index >= this.length) {
            return this.appendNode(value);
        }

        if (index <= 0) {
            return this.prependNode(value);
        }

        const newNode = new DoublyLinkedNode(value);

        const leadingNode = this._traverseToNodeAt(index - 1);
        const followingNode = leadingNode.next;

        newNode.next = followingNode;
        newNode.previous = leadingNode;
        
        leadingNode.next = newNode;
        followingNode.previous = newNode;

        this.length++;
        return this;
    }

    // remove(index) {
    //     if (index <= 0) {
    //         const nodeToRemove = this.head;
    //         this.head = nodeToRemove.next;
    //         this.length--;
    //         return this;
    //     }

    //     if (index >= this.length) {
    //         index = this.length - 1;
    //     }
    //     const leader = this._traverseToIndex(index -1);
    //     const unwantedNode = leader.next;
    //     leader.next = unwantedNode.next;
    //     leader.next.previous = leader;
    //     if (index === this.length - 1) {
    //         this.tail = leader
    //     };
    //     this.length--;
    //     return this;
    // }
}

let myDoublyLinkedList = new DoublyLinkedList(10);

myDoublyLinkedList.appendNode(5).appendNode(16);
myDoublyLinkedList.prependNode(1);
myDoublyLinkedList.insert(2, 99);
// myDoublyLinkedList.remove(1);
