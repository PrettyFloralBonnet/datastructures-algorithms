
// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    _traverseToIndex(index) {
        if (index >= this.length) {
            return this.tail;
        }
        if (index <= 0) {
            return this.head;
        }
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++
        }
        return currentNode
    }
    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    insert(index, value) {
        if (index >= this.length) {
            return this.append(value);
        } else if (index <= 0) {
            return this.prepend(value);
        }
        const newNode = new Node(value);
        const leader = this._traverseToIndex(index - 1)
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this;
    }
    remove(index) {
        if (index <= 0) {
            const holdingPointer = this.head.next;
            delete this.head;
            this.head = holdingPointer;
            this.length--;
            return this;
        };
        if (index >= this.length) {
            index = this.length - 1;
        }
        const leader = this._traverseToIndex(index -1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        if (index === this.length - 1) {
            this.tail = leader
        };
        this.length--;
        return this;
    }
    reverse() {
        if (!this.head.next) {
            return this.head;
        }
        let firstItem = this.head;
        this.tail = this.head;
        let secondItem = firstItem.next;
        while (secondItem) {
            const temp = secondItem.next;
            secondItem.next = firstItem;
            firstItem = secondItem;
            secondItem = temp;
        }
        this.head.next = null;
        this.head = firstItem;
        return this;
    }
}

const myLinkedList = new LinkedList(10);

myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
